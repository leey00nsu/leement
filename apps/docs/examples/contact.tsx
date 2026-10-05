"use client";
import { useState } from "react";
import { Contact } from "../../../registry/blocks/contact";
export default function ContactExample() {
  const [result, setResult] = useState("");
  return (
    <div className="w-full min-w-0">
      <Contact
        onSubmit={(data) => {
          setResult(
            `Local demo received a message from ${data.firstName}. No message was sent.`,
          );
        }}
      />
      <p role="status" className="px-4 text-sm text-muted-foreground">
        {result}
      </p>
    </div>
  );
}
