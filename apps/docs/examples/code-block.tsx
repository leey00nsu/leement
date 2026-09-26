"use client";
import { CodeBlock } from "../../../registry/ui/code-block";
export default function CodeBlockExample() { return <div className="w-full"><CodeBlock filename="hello.ts" language="TypeScript" code={'const greeting = "Hello, Leement";\nconsole.log(greeting);'} showLineNumbers /></div>; }
