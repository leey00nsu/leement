"use client";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";


import * as React from "react";
import { cn } from "@/lib/utils";

type ColorPickerProps = Omit<React.ComponentProps<"div">, "defaultValue" | "onChange"> & {
  label: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (hex: string) => void;
  swatches?: string[];
  disabled?: boolean;
};

function normalize(value: string) {
  const candidate = value.startsWith("#") ? value : "#" + value;
  return /^#[0-9a-f]{6}([0-9a-f]{2})?$/i.test(candidate) ? candidate.toUpperCase() : null;
}
function clamp(value: number, min: number, max: number) { return Math.min(max, Math.max(min, value)); }
function byte(value: number) { return Math.round(clamp(value, 0, 255)).toString(16).padStart(2, "0").toUpperCase(); }
function parseHex(value: string) {
  const hex = normalize(value) ?? "#000000";
  return { r: parseInt(hex.slice(1, 3), 16), g: parseInt(hex.slice(3, 5), 16), b: parseInt(hex.slice(5, 7), 16), a: hex.length === 9 ? parseInt(hex.slice(7, 9), 16) / 255 : 1 };
}
function rgbToHsv(r: number, g: number, b: number) {
  const red = r / 255, green = g / 255, blue = b / 255;
  const high = Math.max(red, green, blue), low = Math.min(red, green, blue), delta = high - low;
  let hue = 0;
  if (delta) {
    if (high === red) hue = ((green - blue) / delta) % 6;
    else if (high === green) hue = (blue - red) / delta + 2;
    else hue = (red - green) / delta + 4;
    hue = (hue * 60 + 360) % 360;
  }
  return { hue, saturation: high === 0 ? 0 : delta / high * 100, brightness: high * 100 };
}
function hsvToHex(hue: number, saturation: number, brightness: number, alpha: number) {
  const chroma = brightness / 100 * saturation / 100;
  const sector = ((hue % 360) + 360) % 360 / 60;
  const second = chroma * (1 - Math.abs(sector % 2 - 1));
  const values = sector < 1 ? [chroma, second, 0] : sector < 2 ? [second, chroma, 0] : sector < 3 ? [0, chroma, second] : sector < 4 ? [0, second, chroma] : sector < 5 ? [second, 0, chroma] : [chroma, 0, second];
  const offset = brightness / 100 - chroma;
  const rgb = values.map((value) => byte((value + offset) * 255)).join("");
  return "#" + rgb + (alpha < 1 ? byte(alpha * 255) : "");
}

function ColorPicker({ label, value, defaultValue, onValueChange, swatches = [], disabled, className, ...props }: ColorPickerProps) {
  const id = React.useId();
  const [internal, setInternal] = React.useState(defaultValue ?? "");
  const selected = normalize(value ?? internal) ?? "#000000";
  const [draft, setDraft] = React.useState(value ?? defaultValue ?? "");
  const [format, setFormat] = React.useState<"hex" | "rgb" | "hsl">("hex");
  const { r, g, b, a } = parseHex(selected);
  const { hue, saturation, brightness } = rgbToHsv(r, g, b);
  const alpha = Math.round(a * 100);

  React.useEffect(() => { if (value !== undefined) setDraft(value); }, [value]);
  React.useEffect(() => {
    if (value !== undefined || defaultValue !== undefined) return;
    const token = getComputedStyle(document.documentElement).getPropertyValue("--lm-color-data-accent").trim();
    const canvas = document.createElement("canvas");
    canvas.width = 1; canvas.height = 1;
    const context = canvas.getContext("2d");
    if (!context || !token) return;
    context.fillStyle = token;
    context.fillRect(0, 0, 1, 1);
    const channels = context.getImageData(0, 0, 1, 1).data;
    const initial = "#" + byte(channels[0] ?? 0) + byte(channels[1] ?? 0) + byte(channels[2] ?? 0);
    setInternal(initial); setDraft(initial);
  }, [defaultValue, value]);

  function choose(next: string) {
    const valid = normalize(next);
    if (!valid || disabled) return;
    if (value === undefined) setInternal(valid);
    setDraft(valid);
    onValueChange?.(valid);
  }
  function setChannels(next: Partial<{ hue: number; saturation: number; brightness: number; alpha: number }>) {
    choose(hsvToHex(next.hue ?? hue, next.saturation ?? saturation, next.brightness ?? brightness, next.alpha ?? a));
  }
  function movePlane(event: React.PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    setChannels({ saturation: clamp((event.clientX - rect.left) / rect.width * 100, 0, 100), brightness: clamp((1 - (event.clientY - rect.top) / rect.height) * 100, 0, 100) });
  }
  const lightness = brightness / 100 * (1 - saturation / 200);
  const hslSaturation = lightness === 0 || lightness === 1 ? 0 : (brightness / 100 - lightness) / Math.min(lightness, 1 - lightness);
  const output = format === "hex" ? selected : format === "rgb" ? (a < 1 ? "rgba(" + [r, g, b, Number(a.toFixed(2))].join(", ") + ")" : "rgb(" + [r, g, b].join(", ") + ")") : "hsl(" + Math.round(hue) + " " + Math.round(hslSaturation * 100) + "% " + Math.round(lightness * 100) + "%" + (a < 1 ? " / " + Number(a.toFixed(2)) : "") + ")";
  const solid = selected.slice(0, 7);
  const rangeClass = "block h-3 w-full cursor-pointer appearance-none rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed [&::-webkit-slider-runnable-track]:h-3 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-transparent [&::-webkit-slider-thumb]:-mt-0.5 [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-foreground [&::-webkit-slider-thumb]:bg-card [&::-moz-range-track]:h-3 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-transparent [&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-foreground [&::-moz-range-thumb]:bg-card";

  return <div data-slot="color-picker" className={cn("w-full max-w-sm rounded-xl border border-border bg-card p-4 text-card-foreground shadow-sm", disabled && "opacity-60", className)} {...props}>
    <label htmlFor={id} className="mb-2 block text-sm font-medium">{label}</label>
    <div data-slot="color-picker-plane" role="group" aria-label="Color field; drag to adjust saturation and brightness. Keyboard controls follow." onPointerDown={(event) => { if (disabled) return; event.currentTarget.setPointerCapture(event.pointerId); movePlane(event); }} onPointerMove={(event) => { if (event.currentTarget.hasPointerCapture(event.pointerId)) movePlane(event); }} onPointerUp={(event) => { if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId); }} className={cn("relative h-48 w-full touch-none overflow-hidden rounded-md", disabled ? "cursor-not-allowed" : "cursor-crosshair")} style={{ background: "linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(" + Math.round(hue) + " 100% 50%)" }}>
      <span aria-hidden="true" className="pointer-events-none absolute size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-[0_0_0_1px_#000]" style={{ left: saturation + "%", top: 100 - brightness + "%" }} />
    </div>
    <div className="mt-3 grid grid-cols-2 gap-2">
      <label className="text-xs text-muted-foreground">Saturation <input type="number" min={0} max={100} disabled={disabled} value={Math.round(saturation)} onChange={(event) => setChannels({ saturation: clamp(Number(event.target.value), 0, 100) })} className="mt-1 h-8 w-full rounded-md border border-input bg-(--lm-color-surface-default) px-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" /></label>
      <label className="text-xs text-muted-foreground">Brightness <input type="number" min={0} max={100} disabled={disabled} value={Math.round(brightness)} onChange={(event) => setChannels({ brightness: clamp(Number(event.target.value), 0, 100) })} className="mt-1 h-8 w-full rounded-md border border-input bg-(--lm-color-surface-default) px-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" /></label>
    </div>
    <div className="mt-3 flex items-center gap-2">
      <input type="color" aria-label={label + " color well"} value={solid} disabled={disabled} onChange={(event) => choose(event.target.value + (a < 1 ? byte(a * 255) : ""))} className="size-9 shrink-0 cursor-pointer rounded-md border border-border bg-transparent disabled:cursor-not-allowed" />
      <div className="min-w-0 flex-1 space-y-2">
        <label className="block text-xs text-muted-foreground">Hue <input type="range" min={0} max={359} aria-label="Hue" disabled={disabled} value={Math.round(hue)} onChange={(event) => setChannels({ hue: Number(event.target.value) })} className={rangeClass} style={{ background: "linear-gradient(to right, red, yellow, lime, cyan, blue, magenta, red)" }} /></label>
        <label className="block text-xs text-muted-foreground">Opacity <input type="range" min={0} max={100} aria-label="Opacity" disabled={disabled} value={alpha} onChange={(event) => setChannels({ alpha: Number(event.target.value) / 100 })} className={rangeClass} style={{ background: "linear-gradient(to right, " + solid + "00, " + solid + "), repeating-conic-gradient(var(--lm-color-border-default) 0% 25%, var(--lm-color-surface-default) 0% 50%) 0 0 / 12px 12px" }} /></label>
      </div>
    </div>
    <div className="mt-3 flex gap-1.5">
      <Select items={[{value:"hex",label:"HEX"},{value:"rgb",label:"RGB"},{value:"hsl",label:"HSL"}]} value={format} disabled={disabled} onValueChange={(next) => { if (next) setFormat(next as "hex" | "rgb" | "hsl"); }}><SelectTrigger aria-label="Color format" size="sm"><SelectValue /></SelectTrigger><SelectContent alignItemWithTrigger={false}><SelectItem value="hex">HEX</SelectItem><SelectItem value="rgb">RGB</SelectItem><SelectItem value="hsl">HSL</SelectItem></SelectContent></Select>
      <input id={id} type="text" value={format === "hex" ? draft : output} readOnly={format !== "hex"} disabled={disabled} onChange={(event) => setDraft(event.target.value)} onBlur={() => { if (format === "hex") { if (normalize(draft)) choose(draft); else setDraft(selected); } }} onKeyDown={(event) => { if (event.key === "Enter" && format === "hex") { event.preventDefault(); if (normalize(draft)) choose(draft); else setDraft(selected); } }} aria-invalid={format === "hex" && draft.length > 0 && !normalize(draft)} className="h-10 min-w-0 flex-1 rounded-md border border-input bg-(--lm-color-surface-default) px-2 font-mono text-xs text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring aria-invalid:border-destructive" />
      <label className="sr-only" htmlFor={id + "-alpha"}>Opacity percentage</label><input id={id + "-alpha"} type="number" min={0} max={100} value={alpha} disabled={disabled} onChange={(event) => setChannels({ alpha: clamp(Number(event.target.value), 0, 100) / 100 })} className="h-10 w-14 rounded-md border border-input bg-(--lm-color-surface-default) px-1 text-center text-xs text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
    </div>
    {swatches.length > 0 && <div role="group" aria-label={label + " presets"} className="mt-3 flex flex-wrap gap-2">{swatches.filter((swatch) => normalize(swatch)).map((swatch) => <button key={swatch} type="button" disabled={disabled} onClick={() => choose(swatch)} aria-label={"Choose " + swatch} aria-pressed={selected === normalize(swatch)} className="size-7 rounded-full border border-border focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring disabled:opacity-50" style={{ backgroundColor: swatch }} />)}</div>}
  </div>;
}

export { ColorPicker };
export type { ColorPickerProps };
