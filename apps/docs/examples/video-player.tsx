"use client";
import { useState } from "react";
import { VideoPlayer } from "../../../registry/ui/video-player";
import { Button } from "../../../registry/ui/button";
export default function VideoPlayerExample() {
  const [src, setSrc] = useState("/demo-player.mp4");
  return <div className="w-full max-w-xl space-y-4">
    <VideoPlayer src={src} title="Leement geometric motion demo" poster="/demo-scene.svg" captionsSrc="/demo-captions.vtt" captionsLang="en" captionsLabel="Demo captions" />
    <div className="flex flex-wrap gap-2">
      <Button type="button" size="sm" variant="outline" onClick={() => setSrc("/demo-player.mp4?alternate=1")}>Change video source</Button>
      <Button type="button" size="sm" variant="outline" onClick={() => setSrc("/demo-missing-video.mp4")}>Simulate video error</Button>
      <Button type="button" size="sm" variant="ghost" onClick={() => setSrc("/demo-player.mp4")}>Reset video sample</Button>
    </div>
    <p className="text-xs leading-5 text-muted-foreground">A geometric video with the same locally generated melody. Turn on Demo captions, adjust the speed or volume, and enter full screen where supported.</p>
  </div>;
}
