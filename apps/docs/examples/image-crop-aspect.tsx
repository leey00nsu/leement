"use client";
import { useState } from "react";
import { ImageCrop } from "../../../registry/ui/image-crop";
import { Button } from "../../../registry/ui/button";
export default function Example() {
  const [aspect, setAspect] = useState(1);
  const [result, setResult] = useState("Apply a crop to read its percentages");
  return (
    <div className="w-full max-w-lg space-y-4">
      <div className="flex gap-2">
        <Button
          size="sm"
          variant={aspect === 1 ? "secondary" : "outline"}
          aria-pressed={aspect === 1}
          onClick={() => setAspect(1)}
        >
          Square
        </Button>
        <Button
          size="sm"
          variant={aspect !== 1 ? "secondary" : "outline"}
          aria-pressed={aspect !== 1}
          onClick={() => setAspect(16 / 9)}
        >
          Widescreen
        </Button>
      </div>
      <ImageCrop
        key={aspect}
        aspect={aspect}
        src="https://cdn.pixabay.com/photo/2018/10/08/22/34/lake-3733649_1280.jpg"
        alt="Lake Ulmener Maar with autumn trees and reflections"
        onApply={(crop) =>
          setResult(
            `x:${crop.x.toFixed(1)}%, y:${crop.y.toFixed(1)}%, width:${crop.width.toFixed(1)}%, height:${crop.height.toFixed(1)}%`,
          )
        }
      />
      <p role="status" className="break-words text-sm">
        {result}
      </p>
    </div>
  );
}
