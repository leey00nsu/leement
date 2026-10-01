"use client";

import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import { Gauge, Pause, Play, RotateCcw, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTitle, PopoverTrigger } from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";

export function finiteTime(value: number) {
  return Number.isFinite(value) && value > 0 ? value : 0;
}
export function formatMediaTime(value: number) {
  const seconds = Math.floor(finiteTime(value));
  return Math.floor(seconds / 60) + ":" + String(seconds % 60).padStart(2, "0");
}

const initialState = { time: 0, duration: 0, volume: 1, muted: false, rate: 1, playing: false, ended: false, ready: false, buffering: false, error: null as string | null };
const playbackRates = [0.75, 1, 1.25, 1.5] as const;

// Native media events are the source of playback state, including OS/native controls.
export function useMediaPlayer(ref: RefObject<HTMLMediaElement | null>) {
  const [state, setState] = useState(initialState);
  const mounted = useRef(false);
  const lastVolume = useRef(1);
  useEffect(() => {
    const media = ref.current;
    if (!media) return;
    mounted.current = true;
    const sync = (event?: Event) => {
      const type = event?.type;
      if (media.volume > 0) lastVolume.current = media.volume;
      setState((previous) => ({
        time: finiteTime(media.currentTime),
        duration: finiteTime(media.duration),
        volume: media.volume,
        muted: media.muted,
        rate: media.playbackRate,
        playing: !media.paused && !media.ended,
        ended: media.ended,
        ready: type === "loadedmetadata" || type === "canplay" || media.readyState >= 1 || previous.ready,
        buffering: type === "waiting" || type === "stalled" ? true : type === "playing" || type === "canplay" || type === "pause" || type === "ended" || type === "error" ? false : previous.buffering,
        error: media.error ? "This media could not be loaded. Check the source or try again." : type === "playing" || type === "play" || type === "canplay" ? null : previous.error,
      }));
    };
    const events = ["loadedmetadata", "durationchange", "canplay", "play", "playing", "pause", "ended", "timeupdate", "volumechange", "ratechange", "waiting", "stalled", "error"] as const;
    events.forEach((event) => media.addEventListener(event, sync));
    sync();
    return () => {
      mounted.current = false;
      events.forEach((event) => media.removeEventListener(event, sync));
      media.pause();
    };
  }, [ref]);

  function seek(value: number) {
    const media = ref.current;
    if (!media || !state.ready || !state.duration || !Number.isFinite(value)) return;
    media.currentTime = Math.min(state.duration, Math.max(0, value));
    setState((previous) => ({ ...previous, time: media.currentTime, ended: false }));
  }
  async function togglePlay() {
    const media = ref.current;
    if (!media) return;
    if (!media.paused) { media.pause(); return; }
    if (media.ended) media.currentTime = 0;
    try { await media.play(); }
    catch {
      if (mounted.current) setState((previous) => ({ ...previous, playing: false, error: "Playback could not start. Try again or use the native controls." }));
    }
  }
  function changeVolume(value: number) {
    const media = ref.current;
    if (!media || !Number.isFinite(value)) return;
    media.volume = Math.min(1, Math.max(0, value));
    if (media.volume > 0) lastVolume.current = media.volume;
    media.muted = false;
  }
  function toggleMute() {
    const media = ref.current;
    if (!media) return;
    if (media.volume === 0) { media.volume = lastVolume.current; media.muted = false; }
    else media.muted = !media.muted;
  }
  function changeRate(rate: number) {
    const media = ref.current;
    if (!media || !playbackRates.some((value) => value === rate)) return;
    try { media.preservesPitch = true; media.playbackRate = rate; }
    catch { setState((previous) => ({ ...previous, error: "This playback speed is not available in this browser." })); }
  }
  function retry() {
    const media = ref.current;
    if (!media) return;
    setState(initialState);
    media.load();
  }
  return { state, seek, togglePlay, toggleMute, changeVolume, changeRate, retry };
}

export type MediaPlayerController = ReturnType<typeof useMediaPlayer>;

export function MediaPlayerStatus({ player, title }: { player: MediaPlayerController; title: string }) {
  const { state } = player;
  if (state.error) return <div className="flex flex-wrap items-center gap-2 p-3 text-sm"><p role="alert" className="text-destructive">{title}: {state.error}</p><Button type="button" variant="outline" size="sm" onClick={player.retry}>Retry media</Button></div>;
  return <span role="status" className="sr-only">{!state.ready ? title + " loading" : state.buffering ? title + " buffering" : ""}</span>;
}

export function MediaPlayerControls({ player, kind, title, timeline = false, children }: { player: MediaPlayerController; kind: "audio" | "video"; title: string; timeline?: boolean; children?: ReactNode }) {
  const { state } = player;
  const disabled = !state.ready || Boolean(state.error);
  return <div aria-label={title + " controls"} role="group" className="flex flex-wrap items-center gap-2 p-3">
    {timeline && <div className="w-full"><Slider aria-label={"Seek " + kind} min={0} max={state.duration || 1} step={0.1} value={[Math.min(state.time, state.duration || 1)]} disabled={disabled || !state.duration} onValueChange={(value) => player.seek(typeof value === "number" ? value : value[0] ?? 0)} /></div>}
    <Button type="button" variant="outline" size="icon-sm" disabled={disabled} aria-label={(state.playing ? "Pause " : state.ended ? "Replay " : "Play ") + kind} onClick={() => void player.togglePlay()}>{state.playing ? <Pause aria-hidden="true" /> : state.ended ? <RotateCcw aria-hidden="true" /> : <Play aria-hidden="true" />}</Button>
    <span aria-live="off" className="min-w-24 text-xs tabular-nums text-muted-foreground">{formatMediaTime(state.time)} / {formatMediaTime(state.duration)}</span>
    <span className="flex-1" />
    <Popover><PopoverTrigger disabled={disabled} render={<Button type="button" variant="ghost" size="icon-sm" aria-label={kind + " playback speed " + state.rate + "×"} />}><Gauge aria-hidden="true" /></PopoverTrigger>
      <PopoverContent align="end" side="top" className="w-56"><PopoverTitle>Playback speed</PopoverTitle><div className="mt-3 grid grid-cols-4 gap-1">{playbackRates.map((rate) => <Button key={rate} type="button" size="xs" variant={state.rate === rate ? "secondary" : "outline"} aria-pressed={state.rate === rate} onClick={() => player.changeRate(rate)}>{rate}×</Button>)}</div></PopoverContent>
    </Popover>
    <Popover><PopoverTrigger disabled={disabled} render={<Button type="button" variant="ghost" size="icon-sm" aria-label={kind + " volume " + Math.round(state.volume * 100) + "%"} />}><Volume2 aria-hidden="true" /></PopoverTrigger>
      <PopoverContent align="end" side="top" className="w-56"><PopoverTitle>Volume</PopoverTitle><p className="mt-1 text-xs text-muted-foreground">{Math.round(state.volume * 100)}%</p><Slider className="mt-4" aria-label={kind + " volume"} min={0} max={100} step={5} value={[state.volume * 100]} onValueChange={(value) => player.changeVolume((typeof value === "number" ? value : value[0] ?? 0) / 100)} /></PopoverContent>
    </Popover>
    <Button type="button" variant="ghost" size="icon-sm" disabled={disabled} aria-label={(state.muted || state.volume === 0 ? "Unmute " : "Mute ") + kind} aria-pressed={state.muted || state.volume === 0} onClick={player.toggleMute}>{state.muted || state.volume === 0 ? <VolumeX aria-hidden="true" /> : <Volume2 aria-hidden="true" />}</Button>
    {children}
  </div>;
}
