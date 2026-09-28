import { useId, type HTMLAttributes, type ReactNode } from "react";

import { cn } from "@/lib/utils";

// A responsive layout for product feature groups.
function BentoGrid({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("grid grid-cols-1 gap-3 md:grid-cols-6", className)} {...props} />;
}

function BentoGridItem({
  children,
  className,
  eyebrow,
  title,
  ...props
}: HTMLAttributes<HTMLElement> & {
  children?: ReactNode;
  eyebrow?: ReactNode;
  title: ReactNode;
}) {
  const titleId = useId();
  return (
    <article
      aria-labelledby={titleId}
      className={cn(
        "group/bento relative flex min-h-64 flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground transition-[border-color,box-shadow,transform] duration-(--lm-motion-duration-normal) focus-within:border-ring hover:-translate-y-0.5 hover:border-ring/50 hover:shadow-md motion-reduce:transform-none",
        className,
      )}
      {...props}
    >
      <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden">{children}</div>
      <header className="relative px-4 py-3.5 sm:px-5">
        <div>
          {eyebrow ? (
            <p className="mb-1 text-[10px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">{eyebrow}</p>
          ) : null}
          <h2 id={titleId} className="text-sm font-semibold tracking-[-0.015em]">{title}</h2>
        </div>
      </header>
    </article>
  );
}

export { BentoGrid, BentoGridItem };
