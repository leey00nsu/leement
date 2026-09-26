"use client";
import { useState } from "react";
import { ImageCrop } from "../../../registry/ui/image-crop";
export default function ImageCropExample() { const [message, setMessage] = useState("Adjust the crop, then apply it."); return <div className="w-full"><ImageCrop src="/demo-scene.svg" alt="Abstract hills" onApply={(crop) => setMessage(`Crop: ${Math.round(crop.width)}% wide, ${Math.round(crop.height)}% tall`)} /><p role="status" className="mt-2 text-sm text-muted-foreground">{message}</p></div>; }
