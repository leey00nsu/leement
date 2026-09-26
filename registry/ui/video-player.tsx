"use client";

import * as React from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

type VideoPlayerProps = Omit<React.ComponentProps<"div">, "children"> & { src: string; title: string; poster?: string; captionsSrc?: string };

function VideoPlayer({ src, title, poster, captionsSrc, className, ...props }: VideoPlayerProps) {
  const video = React.useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = React.useState(false);
  const [muted, setMuted] = React.useState(false);
  const [time, setTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  async function togglePlay() { const element = video.current; if (!element) return; if (element.paused) { try { await element.play(); } catch { setPlaying(false); } } else element.pause(); }
  function toggleMute() { if (!video.current) return; video.current.muted = !video.current.muted; setMuted(video.current.muted); }
  return <div data-slot="video-player" className={cn("w-full overflow-hidden rounded-xl border border-border bg-card text-card-foreground", className)} {...props}>
    <video ref={video} src={src} poster={poster} aria-label={title} playsInline preload="metadata" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onTimeUpdate={(event) => setTime(event.currentTarget.currentTime)} onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)} onEnded={() => setPlaying(false)} className="aspect-video w-full bg-muted object-contain">{captionsSrc && <track kind="captions" src={captionsSrc} srcLang="en" label="Captions" />}</video>
    <div className="flex items-center gap-3 p-3"><button type="button" onClick={togglePlay} aria-label={playing ? "Pause video" : "Play video"} className="rounded-md p-1.5 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{playing ? <Pause className="size-4" /> : <Play className="size-4" />}</button><input type="range" min={0} max={duration || 1} step={0.1} value={Math.min(time, duration || 1)} aria-label="Seek video" onChange={(event) => { if (video.current) video.current.currentTime = Number(event.target.value); setTime(Number(event.target.value)); }} className="min-w-0 flex-1 accent-primary" /><span className="text-xs tabular-nums text-muted-foreground">{Math.floor(time / 60)}:{String(Math.floor(time % 60)).padStart(2, "0")} / {Math.floor(duration / 60)}:{String(Math.floor(duration % 60)).padStart(2, "0")}</span><button type="button" onClick={toggleMute} aria-label={muted ? "Unmute video" : "Mute video"} className="rounded-md p-1.5 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}</button></div>
  </div>;
}

export { VideoPlayer };
export type { VideoPlayerProps };
