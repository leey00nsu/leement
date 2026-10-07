"use client";
import { useState } from "react";
import { ImageCrop } from "../../../registry/ui/image-crop";
export default function ImageCropExample() { const [message, setMessage] = useState("Adjust the crop, then apply it."); return <div className="w-full"><ImageCrop src="https://cdn.pixabay.com/photo/2018/10/08/22/34/lake-3733649_1280.jpg" alt="Lake Ulmener Maar with autumn trees and reflections" onApply={(crop) => setMessage(`Crop: ${Math.round(crop.width)}% wide, ${Math.round(crop.height)}% tall`)} /><p role="status" className="mt-2 text-sm text-muted-foreground">{message}</p></div>; }
