"use client";
import { AspectRatio } from "../../../registry/ui/aspect-ratio";

export default function AspectRatioExample() {

return (<AspectRatio ratio={16/9} className="max-w-md overflow-hidden rounded-lg bg-muted"><div className="flex h-full items-center justify-center text-sm text-muted-foreground">16 : 9 media</div></AspectRatio>);
}
