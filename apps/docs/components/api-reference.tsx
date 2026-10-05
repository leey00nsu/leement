import type { ApiReference as ApiReferenceData } from "../lib/api-reference";

export function ApiReference({ reference, summary }: { reference?: ApiReferenceData; summary: string }) {
  return <section id="api-reference" className="mt-12 scroll-mt-24 space-y-6">
    <h2 className="text-2xl font-semibold tracking-tight">API Reference</h2>
    <p className="text-sm leading-7 text-muted-foreground">{summary}</p>
    {reference?.parts.map(part => <section key={part.name} id={`api-${part.name.toLowerCase()}`} className="scroll-mt-24 space-y-3">
      <h3 className="font-mono text-lg font-semibold">{part.name}</h3>
      <p className="text-sm leading-7 text-muted-foreground">{part.description}</p>
      {part.props.length > 0 && <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">{part.name} properties</caption>
          <thead className="bg-muted/50"><tr>{["Prop", "Type", "Default", "Description"].map(label => <th key={label} scope="col" className="px-4 py-3 font-medium">{label}</th>)}</tr></thead>
          <tbody>{part.props.map(prop => <tr key={prop.name} className="border-t border-border align-top">
            <th scope="row" className="px-4 py-3 font-normal"><code>{prop.name}</code>{prop.required && <span className="ml-1 text-xs text-destructive">required</span>}</th>
            <td className="min-w-40 px-4 py-3"><code className="break-words text-xs">{prop.type}</code></td>
            <td className="px-4 py-3"><code className="text-xs">{prop.default ?? "—"}</code></td>
            <td className="min-w-52 px-4 py-3 leading-6 text-muted-foreground">{prop.description}</td>
          </tr>)}</tbody>
        </table>
      </div>}
    </section>)}
    {reference?.notes?.map(note => <p key={note} className="text-sm leading-7 text-muted-foreground">{note}</p>)}
    {reference?.links?.map(link => <p key={link.href}><a href={link.href} className="text-sm underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{link.label}</a></p>)}
  </section>;
}
