"use client";

import { useEffect, useImperativeHandle, useRef, useState, type ComponentProps } from "react";
import { Captions, Maximize, Minimize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MediaPlayerControls, MediaPlayerStatus, useMediaPlayer } from "@/lib/media-player";
import { cn } from "@/lib/utils";

type VideoPlayerProps = Omit<ComponentProps<"div">, "children"> & {
  src: string;
  title: string;
  poster?: string;
  captionsSrc?: string;
  captionsLang?: string;
  captionsLabel?: string;
};
function VideoPlayer(props: VideoPlayerProps) {
  return <VideoPlayerInstance key={props.src} {...props} />;
}
function VideoPlayerInstance({ src, title, poster, captionsSrc, captionsLang = "en", captionsLabel = "Captions", className, ref: forwardedRef, ...props }: VideoPlayerProps) {
  const root = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const caption = useRef<HTMLTrackElement>(null);
  useImperativeHandle(forwardedRef, () => root.current!);
  const player = useMediaPlayer(video);
  const [enhanced, setEnhanced] = useState(false);
  const [captionsOn, setCaptionsOn] = useState(false);
  const [fullscreenAvailable, setFullscreenAvailable] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [fullscreenError, setFullscreenError] = useState<string | null>(null);

  useEffect(() => {
    setEnhanced(true);
    setFullscreenAvailable(Boolean(document.fullscreenEnabled && root.current?.requestFullscreen));
    const update = () => setFullscreen(document.fullscreenElement === root.current);
    document.addEventListener("fullscreenchange", update);
    return () => document.removeEventListener("fullscreenchange", update);
  }, []);
  useEffect(() => {
    const tracks = video.current?.textTracks;
    if (!tracks) return;
    const update = () => setCaptionsOn(Array.from(tracks).some((track) => track.kind === "captions" && track.mode === "showing"));
    tracks.addEventListener?.("change", update);
    update();
    return () => tracks.removeEventListener?.("change", update);
  }, [captionsSrc]);

  function toggleCaptions() {
    const track = caption.current?.track;
    if (!track) return;
    track.mode = captionsOn ? "disabled" : "showing";
    setCaptionsOn(!captionsOn);
  }
  async function toggleFullscreen() {
    const element = root.current;
    if (!element) return;
    try {
      if (document.fullscreenElement === element) await document.exitFullscreen();
      else await element.requestFullscreen();
      setFullscreenError(null);
    } catch { if (element.isConnected) setFullscreenError("Full screen is unavailable. You can continue in the player."); }
  }
  return <div ref={root} data-slot="video-player" className={cn("w-full overflow-hidden rounded-xl border border-border bg-card text-card-foreground", className)} {...props}>
    <video ref={video} src={src || undefined} poster={poster} aria-label={title} controls={!enhanced || Boolean(player.state.error)} playsInline preload="metadata" className="aspect-video w-full bg-muted object-contain">
      {captionsSrc && <track key={captionsSrc} ref={caption} kind="captions" src={captionsSrc} srcLang={captionsLang} label={captionsLabel} />}
    </video>
    {enhanced && <MediaPlayerControls player={player} kind="video" title={title} timeline>
      {captionsSrc && <Button type="button" variant="ghost" size="icon-sm" aria-label="Toggle captions" aria-pressed={captionsOn} disabled={!player.state.ready} onClick={toggleCaptions}><Captions aria-hidden="true" /></Button>}
      {fullscreenAvailable && <Button type="button" variant="ghost" size="icon-sm" aria-label={fullscreen ? "Exit full screen" : "Enter full screen"} onClick={() => void toggleFullscreen()}>{fullscreen ? <Minimize aria-hidden="true" /> : <Maximize aria-hidden="true" />}</Button>}
    </MediaPlayerControls>}
    {src ? <MediaPlayerStatus player={player} title={title} /> : <p role="status" className="p-3 text-sm text-muted-foreground">No video source.</p>}
    {fullscreenError && <p role="status" className="px-3 pb-3 text-sm text-muted-foreground">{fullscreenError}</p>}
  </div>;
}
export { VideoPlayer };
export type { VideoPlayerProps };
