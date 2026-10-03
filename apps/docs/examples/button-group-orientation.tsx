"use client";
import { useState } from "react";
import { Copy, Trash } from "lucide-react";
import { ButtonGroup } from "../../../registry/ui/button-group";
import { Button } from "../../../registry/ui/button";
export default function Example() {
  const [result, setResult] = useState("No action yet");
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <ButtonGroup orientation="vertical" aria-label="Revision actions">
        <Button variant="outline" onClick={() => setResult("Draft saved")}>
          Save draft
        </Button>
        <Button
          variant="outline"
          onClick={() => setResult("Revision published")}
        >
          Publish
        </Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Item actions">
        <Button
          variant="outline"
          size="icon"
          aria-label="Copy item"
          onClick={() => setResult("Copy requested")}
        >
          <Copy aria-hidden="true" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          aria-label="Delete item"
          onClick={() => setResult("Delete requested")}
        >
          <Trash aria-hidden="true" />
        </Button>
      </ButtonGroup>
      <p role="status" className="text-sm">
        {result}
      </p>
    </div>
  );
}
