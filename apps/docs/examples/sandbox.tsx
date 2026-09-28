"use client";

import { Sandbox } from "../../../registry/blocks/sandbox";

const files = {
  "/App.js": [
    'import { useState } from "react";',
    'import "./styles.css";',
    "",
    "export default function App() {",
    "  const [count, setCount] = useState(0);",
    "  return <main>",
    "    <small>LIVE EXAMPLE</small>",
    "    <h1>Make the code yours.</h1>",
    "    <p>Edit this file and see the preview update.</p>",
    "    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>",
    "  </main>;",
    "}",
  ].join("\n"),
  "/styles.css": [
    "body { margin: 0; font-family: system-ui, sans-serif; }",
    "main { max-width: 28rem; margin: 3rem auto; padding: 2rem; }",
    "small { letter-spacing: .15em; color: #666; }",
    "h1 { font-size: 1.75rem; margin: 1rem 0; }",
    "p { color: #555; line-height: 1.5; }",
    "button { margin-top: 1rem; border: 0; border-radius: .5rem; background: #202024; color: white; padding: .75rem 1rem; cursor: pointer; }",
  ].join("\n"),
};

export default function SandboxExample() { return <div className="w-full"><Sandbox files={files} /></div>; }
