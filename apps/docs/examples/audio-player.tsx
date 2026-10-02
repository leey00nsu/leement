"use client";
import { useState } from "react";
import { AudioPlayer } from "../../../registry/ui/audio-player";
import { Button } from "../../../registry/ui/button";

export default function AudioPlayerExample() {
  const [src, setSrc] = useState("/demo-audio.wav");
  const [brand, setBrand] = useState(false);
  return <div className="w-full max-w-xl space-y-4">
    <AudioPlayer src={src} title="Generated melody" brand={brand} />
    <div className="flex flex-wrap gap-2">
      <Button type="button" size="sm" variant="outline" aria-pressed={brand} onClick={() => setBrand(!brand)}>Brand waveform</Button>
      <Button type="button" size="sm" variant="outline" onClick={() => setSrc("/demo-audio.wav?alternate=1")}>Change source</Button>
      <Button type="button" size="sm" variant="outline" onClick={() => setSrc("/demo-missing-audio.wav")}>Simulate error</Button>
      <Button type="button" size="sm" variant="ghost" onClick={() => setSrc("/demo-audio.wav")}>Reset sample</Button>
    </div>
    <p className="text-xs leading-5 text-muted-foreground">Locally generated tones, not a recorded voice. Use the waveform or its arrow keys to seek. Enable brand color, then try a Foundations color override. The sample never starts automatically.</p>
  </div>;
}
