"use client";
import { useState } from "react";
import { AudioPlayer } from "../../../registry/ui/audio-player";
import { Button } from "../../../registry/ui/button";

const tracks = [
  {
    src: "https://cdn.pixabay.com/audio/2022/03/26/audio_b6d1946a6b.mp3",
    title: "Atmospheric Ambient Music with Piano",
    author: "GavinNellist",
    href: "https://pixabay.com/music/ambient-atmospheric-ambient-music-with-piano-108412/"
  },
  {
    src: "https://cdn.pixabay.com/audio/2026/05/07/audio_98b252e81c.mp3",
    title: "Ambient Piano",
    author: "FreeMusicForVideo",
    href: "https://pixabay.com/music/solo-piano-ambient-piano-524039/"
  }
];
export default function AudioPlayerExample() {
  const [index, setIndex] = useState(0);
  const [error, setError] = useState(false);
  const [brand, setBrand] = useState(false);
  const track = tracks[index]!;
  return <div className="w-full max-w-xl space-y-4">
    <AudioPlayer src={error ? "/demo-missing-audio.wav" : track.src} title={track.title} brand={brand} />
    <div className="flex flex-wrap gap-2">
      <Button type="button" size="sm" variant="outline" aria-pressed={brand} onClick={() => setBrand(!brand)}>Brand waveform</Button>
      <Button type="button" size="sm" variant="outline" onClick={() => { setIndex((value) => (value + 1) % tracks.length); setError(false); }}>Change source</Button>
      <Button type="button" size="sm" variant="outline" onClick={() => setError(true)}>Simulate error</Button>
      <Button type="button" size="sm" variant="ghost" onClick={() => { setIndex(0); setError(false); }}>Reset sample</Button>
    </div>
    <p className="text-xs leading-5 text-muted-foreground"><a href={track.href} target="_blank" rel="noreferrer" className="underline underline-offset-4">{track.title}</a> by {track.author} on Pixabay. The waveform is decoded from the actual recording. Use it or its arrow keys to seek, then try brand color and a Foundations override. Playback starts only when you choose it.</p>
  </div>;
}
