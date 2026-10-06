import { Fragment, type ReactNode } from "react";
import { CopyButton } from "./item-workbench";

export type UsageSection = {
  id: string;
  title: string;
  blocks: { kind: "text" | "code"; value: string; language?: string }[];
};

function inline(text: string): ReactNode {
  return text
    .split(/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
    .map((part, index) => {
      if (part.startsWith("`"))
        return (
          <code key={index} className="rounded bg-muted px-1 py-0.5 text-xs">
            {part.slice(1, -1)}
          </code>
        );
      if (part.startsWith("**"))
        return (
          <strong key={index} className="font-medium text-foreground">
            {part.slice(2, -2)}
          </strong>
        );
      const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
      if (link && /^(https?:\/\/|\/|#)/.test(link[2]!))
        return (
          <a
            key={index}
            href={link[2]}
            className="underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {link[1]}
          </a>
        );
      return <Fragment key={index}>{part}</Fragment>;
    });
}
export function GuideText({ value }: { value: string }) {
  return (
    <div className="space-y-3 text-sm leading-7 text-muted-foreground">
      {value.split(/\n\s*\n/).map((paragraph, i) => {
        if (paragraph.startsWith("### ") || paragraph.startsWith("#### "))
          return (
            <h4 key={i} className="pt-2 font-medium text-foreground">
              {inline(paragraph.replace(/^#{3,4} /, ""))}
            </h4>
          );
        if (paragraph.startsWith("|")) {
          const rows = paragraph
            .split("\n")
            .filter((row) => row.startsWith("|") && !/^\|[\s:|-]+\|$/.test(row))
            .map((row) =>
              row
                .split("|")
                .slice(1, -1)
                .map((cell) => cell.trim()),
            );
          return (
            <div
              key={i}
              className="overflow-x-auto rounded-md border border-border"
            >
              <table className="w-full text-left">
                <tbody>
                  {rows.map((row, j) => (
                    <tr
                      key={j}
                      className="border-b border-border last:border-b-0"
                    >
                      {row.map((cell, k) =>
                        j === 0 ? (
                          <th
                            key={k}
                            className="px-3 py-2 font-medium text-foreground"
                          >
                            {inline(cell)}
                          </th>
                        ) : (
                          <td key={k} className="px-3 py-2 align-top">
                            {inline(cell)}
                          </td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        if (/^(?:- |\d+\. )/.test(paragraph))
          return (
            <ul key={i} className="list-disc space-y-1 ps-5">
              {paragraph.split(/\n(?=(?:- |\d+\. ))/).map((line, j) => (
                <li key={j}>{inline(line.replace(/^(?:- |\d+\. )/, ""))}</li>
              ))}
            </ul>
          );
        return (
          <p key={i} className="whitespace-pre-line">
            {inline(paragraph)}
          </p>
        );
      })}
    </div>
  );
}
export function UsageGuide({ sections }: { sections?: UsageSection[] }) {
  if (!sections?.length) return null;
  return (
    <div className="space-y-8">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-24 space-y-4"
        >
          <h3 className="text-lg font-semibold">
            {section.title}
          </h3>
          <div className="space-y-4">
            {section.blocks.map((block, i) =>
              block.kind === "text" ? (
                <GuideText key={i} value={block.value} />
              ) : (
                <div
                  key={i}
                  className="min-w-0 overflow-hidden rounded-lg border border-border bg-background"
                >
                  <div className="flex items-center justify-between gap-3 border-b border-border bg-muted/40 px-3 py-2">
                    <span className="font-mono text-xs text-muted-foreground">
                      {block.language}
                    </span>
                    <CopyButton
                      value={block.value}
                      label={`Copy ${section.title} snippet ${i + 1}`}
                    />
                  </div>
                  <pre className="max-h-[28rem] overflow-auto p-4 text-xs leading-6">
                    <code>{block.value}</code>
                  </pre>
                </div>
              ),
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
