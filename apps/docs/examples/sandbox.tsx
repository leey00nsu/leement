"use client";
import { Sandbox } from "../../../registry/blocks/sandbox";
export default function SandboxExample() { return <div className="w-full"><Sandbox files={{ "/App.js": 'export default function App() { return <button onClick={(event) => event.currentTarget.textContent = "Clicked!"}>Click me</button>; }' }} /></div>; }
