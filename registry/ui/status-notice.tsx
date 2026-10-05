import { cva, type VariantProps } from "class-variance-authority";
import { CircleCheck, Info, TriangleAlert } from "lucide-react";
import type * as React from "react";

import { cn } from "@/lib/utils";

type StatusNoticeTone = "destructive" | "neutral" | "success" | "warning";

type StatusNoticeProps = Omit<React.ComponentProps<"div">, "title"> & {
  action?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  tone?: StatusNoticeTone;
};

const toneClasses: Record<StatusNoticeTone, { icon: string; root: string }> = {
  neutral: {
    icon: "bg-foreground/7 text-muted-foreground",
    root: "bg-muted/45 text-foreground",
  },
  success: {
    icon: "bg-success/55 text-success-foreground",
    root: "bg-success/28 text-foreground",
  },
  warning: {
    icon: "bg-warning/75 text-warning-foreground",
    root: "bg-warning/35 text-foreground",
  },
  destructive: {
    icon: "bg-destructive/10 text-destructive",
    root: "bg-destructive/[0.055] text-destructive",
  },
};

function defaultIcon(tone: StatusNoticeTone) {
  if (tone === "success") return <CircleCheck />;
  if (tone === "warning" || tone === "destructive") return <TriangleAlert />;
  return <Info />;
}

function StatusNotice({
  action,
  children,
  className,
  description,
  icon,
  role,
  title,
  tone = "neutral",
  ...props
}: StatusNoticeProps) {
  const classes = toneClasses[tone];

  return (
    <div
      className={cn(
        "grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-3 gap-y-2 rounded-xl px-4 py-3.5 text-sm leading-6",
        classes.root,
        action && "sm:grid-cols-[auto_minmax(0,1fr)_auto]",
        className,
      )}
      data-slot="status-notice"
      data-tone={tone}
      role={role ?? (tone === "destructive" ? "alert" : "status")}
      {...props}
    >
      <span
        aria-hidden="true"
        className={cn("flex size-7 shrink-0 items-center justify-center rounded-full [&_svg]:size-4", classes.icon)}
        data-slot="status-notice-icon"
      >
        {icon ?? defaultIcon(tone)}
      </span>
      <div className="min-w-0 self-center" data-slot="status-notice-content">
        {title ? <p className="font-semibold text-current">{title}</p> : null}
        {description ? (
          <div className={cn("text-xs leading-5", title ? "mt-0.5 text-muted-foreground" : "text-current/80")}>
            {description}
          </div>
        ) : null}
        {children}
      </div>
      {action ? <div className="col-start-2 flex flex-wrap items-center gap-2 sm:col-start-3">{action}</div> : null}
    </div>
  );
}

export type { StatusNoticeProps, StatusNoticeTone };
export { StatusNotice };

// shadcn/ui MIT composition; source license accompanies this item.

const alertVariants = cva("grid gap-0.5 rounded-lg border px-2.5 py-2 text-left text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4 group/alert relative w-full", {
  variants: {
    variant: {
      default: "bg-card text-card-foreground",
      destructive: "text-destructive bg-card *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "font-medium group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground text-sm text-balance md:text-pretty [&_p:not(:last-child)]:mb-4 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function AlertAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-action"
      className={cn("absolute top-2 right-2", className)}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription, AlertAction }
