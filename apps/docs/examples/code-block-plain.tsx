import { CodeBlock } from "../../../registry/ui/code-block";
export default function Example() {
  return (
    <div className="w-full max-w-xl space-y-5">
      <CodeBlock
        filename="install.sh"
        language="bash"
        code="pnpm add @leement/theme"
        showLineNumbers={false}
      />
      <CodeBlock
        filename="notes.custom"
        language="unknown-language"
        code={
          "Design tokens → theme → editable source\n<custom syntax remains readable>"
        }
        showLineNumbers={false}
      />
    </div>
  );
}
