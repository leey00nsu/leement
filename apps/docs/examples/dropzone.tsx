"use client";
import { Dropzone } from "../../../registry/ui/dropzone";
export default function DropzoneExample() { return <div className="w-full max-w-md"><Dropzone label="Upload images" accept="image/*" multiple onFiles={() => {}} /></div>; }
