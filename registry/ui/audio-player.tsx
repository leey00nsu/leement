"use client";

import { useEffect, useImperativeHandle, useRef, useState, type ComponentProps } from "react";
import type WaveSurfer from "wavesurfer.js";
import { finiteTime, formatMediaTime, MediaPlayerControls, MediaPlayerStatus, useMediaPlayer } from "@/lib/media-player";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useStyleMotion } from "@/lib/leement-motion";

type AudioPlayerProps = Omit<ComponentProps<"div">, "children"> & {
  src: string;
  title: string;
  peaks?: Array<Float32Array | number[]>;
  duration?: number;
  brand?: boolean;
};

function AudioPlayer(props: AudioPlayerProps) {
  return <AudioPlayerInstance key={props.src} {...props} />;
}
function AudioPlayerInstance({ src, title, peaks, duration, brand = false, className, ref: forwardedRef, ...props }: AudioPlayerProps) {
  const root = useRef<HTMLDivElement>(null);
  const audio = useRef<HTMLAudioElement>(null);
  const canvas = useRef<HTMLDivElement>(null);
  const canvasMotion = useStyleMotion<HTMLDivElement>(canvas, ["opacity"], "slow");
  useImperativeHandle(forwardedRef, () => root.current!);
  const player = useMediaPlayer(audio);
  const [waveform, setWaveform] = useState<"loading" | "ready" | "fallback">(src ? "loading" : "fallback");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!src || !audio.current || !canvas.current || !root.current) return;
    let disposed = false;
    let engine: WaveSurfer | undefined;
    let observer: MutationObserver | undefined;
    let preference: MediaQueryList | undefined;
    const container = canvas.current, media = audio.current, element = root.current;
    setWaveform("loading");
    // Keep native controls available if fetching/decoding cannot complete.
    const timeout = window.setTimeout(() => { if (!disposed) setWaveform("fallback"); }, 15000);
    function colors() {
      const color = (name: string) => {
        // Resolve var()/color-mix to an actual color for the canvas renderer.
        const probe = document.createElement("span");
        probe.style.color = "var(" + name + ")";
        probe.hidden = true;
        element.appendChild(probe);
        const value = getComputedStyle(probe).color;
        probe.remove();
        return value;
      };
      return { waveColor: color("--lm-color-foreground-muted"), progressColor: brand ? [color("--lm-color-brand-gradient-start"), color("--lm-color-brand-gradient-middle"), color("--lm-color-brand-gradient-end")] : color("--lm-color-data-accent-foreground"), cursorColor: color("--lm-color-data-accent-foreground") };
    }
    const refresh = () => { if (!disposed && engine) engine.setOptions(colors()); };
    window.addEventListener("leement:theme-change", refresh);
    void import("wavesurfer.js").then(({ default: WaveSurfer }) => {
      if (disposed) return;
      engine = WaveSurfer.create({ container, media, height: 72, barWidth: 2, barGap: 2, barRadius: 2, normalize: true, dragToSeek: true, url: src, peaks: peaks && finiteTime(duration ?? 0) ? peaks : undefined, duration: peaks && finiteTime(duration ?? 0) ? duration : undefined, ...colors() });
      engine.on("ready", () => { if (!disposed) { clearTimeout(timeout); setWaveform("ready"); } });
      engine.on("error", () => { if (!disposed) { clearTimeout(timeout); setWaveform("fallback"); } });
      // Canvas colors don't read CSS variables themselves. Observe only ancestors' theme attributes.
      observer = new MutationObserver(refresh);
      let ancestor: HTMLElement | null = element;
      while (ancestor) { observer.observe(ancestor, { attributes: true, attributeFilter: ["class", "style", "data-lm-theme"] }); ancestor = ancestor.parentElement; }
      preference = window.matchMedia("(prefers-color-scheme: dark)");
      preference.addEventListener("change", refresh);

    }).catch(() => { if (!disposed) { clearTimeout(timeout); setWaveform("fallback"); } });
    return () => {
      disposed = true;
      clearTimeout(timeout);
      window.removeEventListener("leement:theme-change", refresh);
      observer?.disconnect();
      preference?.removeEventListener("change", refresh);
      engine?.destroy();
    };
  }, [src, peaks, duration, brand, attempt]);

  const enhanced = waveform === "ready" && !player.state.error;
  return <div ref={root} data-slot="audio-player" data-waveform={waveform} data-brand={brand} className={cn("w-full rounded-xl border border-border bg-card text-card-foreground", className)} {...props}>
    <div className="relative mx-3 mt-3 min-h-[72px] overflow-hidden rounded-[var(--lm-radius-md)] [@media(scripting:none)]:hidden" hidden={waveform === "fallback"} aria-hidden={!enhanced}>
      <div ref={canvasMotion} className="min-h-[72px] opacity-0 data-[ready=true]:opacity-100 focus-visible:outline-2 focus-visible:outline-[var(--lm-color-focus-ring)] focus-visible:-outline-offset-2" data-ready={enhanced} role="slider" aria-label={title + " waveform"} aria-valuemin={0} aria-valuemax={player.state.duration} aria-valuenow={Math.min(player.state.time, player.state.duration)} aria-valuetext={formatMediaTime(player.state.time) + " / " + formatMediaTime(player.state.duration)} aria-busy={!enhanced} aria-disabled={!enhanced || !player.state.duration} tabIndex={enhanced && player.state.duration ? 0 : -1} onKeyDown={(event) => {
        if (!enhanced) return;
        const targets: Record<string, number> = { ArrowLeft: player.state.time - 5, ArrowRight: player.state.time + 5, Home: 0, End: player.state.duration };
        if (event.key in targets) { event.preventDefault(); player.seek(targets[event.key]!); }
        else if (event.key === " ") { event.preventDefault(); void player.togglePlay(); }
      }} />
      {!enhanced && <Skeleton aria-hidden="true" className="absolute inset-0" />}
    </div>
    <audio ref={audio} src={src || undefined} aria-label={title} controls preload="metadata" hidden={enhanced} className="w-full p-3" />
    {waveform === "fallback" && src && <div className="flex flex-wrap items-center gap-2 px-3 pb-3"><p className="text-xs text-muted-foreground">Waveform unavailable. Use the native audio controls.</p><button type="button" className="text-xs underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" onClick={() => setAttempt((value) => value + 1)}>Retry waveform</button></div>}
    {enhanced && <MediaPlayerControls player={player} kind="audio" title={title} />}
    {src ? <MediaPlayerStatus player={player} title={title} /> : <p role="status" className="p-3 text-sm text-muted-foreground">No audio source.</p>}
  </div>;
}
export { AudioPlayer };
export type { AudioPlayerProps };
