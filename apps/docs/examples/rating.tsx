"use client";
import { Rating } from "../../../registry/ui/rating";
export default function RatingExample() { return <div className="flex flex-col items-center gap-4 text-center"><div><p className="mb-2 text-sm">Rate this example</p><Rating label="Rate this example" defaultValue={3} /></div><div><p className="mb-2 text-sm">Average rating</p><Rating label="Average rating" value={4} readOnly /></div></div>; }
