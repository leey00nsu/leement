"use client";
import { AudioPlayer } from "@/components/ui/audio-player";
import { LegacyAudioWaveformPlayer } from "./legacy-audio-waveform-player";
import type { AudioPlaybackSegment } from "./legacy-audio-waveform-player";
export type { AudioPlaybackRange, AudioPlaybackSegment } from "./legacy-audio-waveform-player";
type Props = { src: string; label?: string; className?: string; segments?: AudioPlaybackSegment[]; waveformPeaks?: Array<Float32Array | number[]>; waveformDuration?: number };
export function AudioWaveformPlayer({label="오디오", waveformPeaks, waveformDuration, segments, ...props}: Props) {
  // Keep optional app-owned segment playback; general product playback uses Leement source.
  if (segments?.length) return <LegacyAudioWaveformPlayer {...props} label={label} segments={segments} waveformPeaks={waveformPeaks} waveformDuration={waveformDuration}/>;
  return <AudioPlayer {...props} title={label} peaks={waveformPeaks} duration={waveformDuration} brand/>;
}
