"use client";
import { useState } from "react";
import { VideoPlayer } from "../../../registry/ui/video-player";
import { Button } from "../../../registry/ui/button";

const clips = [
  {
    id: "lake",
    src: "https://cdn.pixabay.com/video/2021/03/07/67201-521635037_tiny.mp4",
    poster: "https://cdn.pixabay.com/video/2021/03/07/67201-521635037_tiny.jpg",
    title: "Lakeside village · mariancroitoru",
    scene: "A lakeside village beside calm water.",
    duration: "11.378"
  },
  {
    id: "waterfall",
    src: "https://cdn.pixabay.com/video/2023/11/19/189692-886572510_tiny.mp4",
    poster: "https://cdn.pixabay.com/video/2023/11/19/189692-886572510_tiny.jpg",
    title: "Forest waterfall · JoshuaWoroniecki",
    scene: "Water cascades over mossy rocks in a forest.",
    duration: "12.033"
  }
];
// Descriptive scene text, not a transcript of speech. Inline VTT travels with copied code.
export default function VideoPlayerExample() {
  const [index, setIndex] = useState(0);
  const [error, setError] = useState(false);
  const clip = clips[index]!;
  const captions = "WEBVTT\n\n00:00:00.000 --> 00:00:" + clip.duration + "\n" + clip.scene + "\n";
  return <div className="w-full max-w-xl space-y-4">
    <VideoPlayer src={error ? "/demo-missing-video.mp4" : clip.src} title={clip.title} poster={clip.poster} captionsSrc={"data:text/vtt;charset=utf-8," + encodeURIComponent(captions)} captionsLang="en" captionsLabel="Scene descriptions" />
    <div className="flex flex-wrap gap-2">
      <Button type="button" size="sm" variant="outline" onClick={() => { setIndex((value) => (value + 1) % clips.length); setError(false); }}>Change video source</Button>
      <Button type="button" size="sm" variant="outline" onClick={() => setError(true)}>Simulate video error</Button>
      <Button type="button" size="sm" variant="ghost" onClick={() => { setIndex(0); setError(false); }}>Reset video sample</Button>
    </div>
    <p className="text-xs leading-5 text-muted-foreground">Real Pixabay footage with its own scene poster. Scene descriptions identify the visible landscape; they are not spoken captions. Try playback, seeking, volume, speed and full screen where supported.</p>
  </div>;
}
