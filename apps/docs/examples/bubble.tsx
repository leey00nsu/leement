"use client";
import { useState } from "react";
import { Bubble, BubbleGroup, BubbleContent, BubbleReactions } from "../../../registry/ui/bubble";
import { Button } from "../../../registry/ui/button";
export default function BubbleExample() {
 const [liked,setLiked]=useState(false);
 return <BubbleGroup className="w-full max-w-sm gap-6" aria-label="Conversation"><Bubble variant="muted"><BubbleContent>Is the new design ready to review?</BubbleContent></Bubble><Bubble align="end"><BubbleContent>Yes. The components and examples are ready.</BubbleContent><BubbleReactions><Button size="xs" variant="ghost" aria-label="Like reply" aria-pressed={liked} onClick={()=>setLiked(!liked)}>👍 {liked ? 1 : 0}</Button></BubbleReactions></Bubble></BubbleGroup>;
}
