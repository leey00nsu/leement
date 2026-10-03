import { Typography } from "../../../registry/ui/typography";
export default function Example() {
  return (
    <div className="w-full max-w-lg space-y-5">
      <section className="space-y-2">
        <Typography as="h3" variant="heading">
          A prominent section heading
        </Typography>
        <Typography variant="small">
          Small supporting text explains the section without changing its
          meaning.
        </Typography>
      </section>
      <section className="space-y-2">
        <Typography as="h3" variant="subheading">
          A compact section heading
        </Typography>
        <Typography variant="muted">
          Both headings keep the same document level.
        </Typography>
      </section>
    </div>
  );
}
