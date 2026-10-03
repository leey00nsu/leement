import { Avatar,AvatarImage,AvatarFallback } from "../../../registry/ui/avatar";
export default function Example() {
 return <div className="flex flex-wrap items-end gap-5">{["size-8","size-10","size-14"].map(size=><div key={size} className="space-y-2"><Avatar className={size}><AvatarImage src="/demo-scene.svg" alt="Alex’s illustrated profile" /><AvatarFallback>AL</AvatarFallback></Avatar><p className="text-xs text-muted-foreground">{size}</p></div>)}<div className="space-y-2"><Avatar className="size-10"><AvatarImage src="data:image/png;base64,broken" alt="Blair" /><AvatarFallback>BK</AvatarFallback></Avatar><p className="text-xs text-muted-foreground">Unavailable image</p></div></div>;
}
