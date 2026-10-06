import {
  publishedVersion,
  releases,
  repositoryVersion,
  unreleasedChanges,
} from "../../lib/releases";

export default function Page() {
  return (
    <article className="min-w-0 max-w-3xl space-y-8 pb-16">
      <header>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Project</p>
        <h1 className="mt-2 text-4xl font-semibold">Changelog</h1>
      </header>
      {(repositoryVersion !== publishedVersion || unreleasedChanges.length > 0) && (
        <section aria-labelledby="unreleased-heading" className="space-y-5 rounded-2xl bg-muted p-5 sm:p-6">
          <h2 id="unreleased-heading" className="text-2xl font-semibold">Unreleased{repositoryVersion !== publishedVersion ? ` · ${repositoryVersion}` : ""}</h2>
          <p className="text-sm leading-7 text-muted-foreground">These changes are not included in the release documented below. The latest documented public release is {publishedVersion}.</p>
          {unreleasedChanges.map((change) => (
            <div key={change.title}>
              <h3 className="font-semibold">{change.title}</h3>
              <p className="mt-1 text-sm leading-7 text-muted-foreground">{change.details}</p>
            </div>
          ))}
        </section>
      )}
      {releases.map((release) => {
        const id = `release-${release.version.replaceAll(".", "-")}`;
        return (
          <section key={release.version} aria-labelledby={id} className="space-y-5 rounded-2xl bg-muted p-5 sm:p-6 [&_p]:text-foreground [&>ol]:text-foreground [&>ul]:text-foreground">
            <h2 id={id} className="text-2xl font-semibold">{release.version}</h2>
            <p className="text-sm leading-7 text-muted-foreground">{release.summary}</p>
            {release.changes.map((change) => (
              <div key={change.title}>
                <h3 className="font-semibold">{change.title}</h3>
                <p className="mt-1 text-sm leading-7 text-muted-foreground">{change.details}</p>
              </div>
            ))}
            {release.migrations && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Migration notes</h3>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-muted-foreground">
                  {release.migrations.map((note) => <li key={note}>{note}</li>)}
                </ul>
                {release.migrationExample && (
                  <pre className="overflow-x-auto rounded-xl bg-background p-4 text-xs"><code>{release.migrationExample}</code></pre>
                )}
              </div>
            )}
          </section>
        );
      })}
    </article>
  );
}
