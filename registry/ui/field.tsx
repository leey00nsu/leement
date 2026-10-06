"use client";
import * as React from "react";
import { useRender } from "@base-ui/react/use-render";
import { mergeProps } from "@base-ui/react/merge-props";
import { Field as Primitive } from "@base-ui/react/field";
import { Separator } from "@/components/ui/separator";
import { useStyleMotion } from "@/lib/leement-motion";
import { cn } from "@/lib/utils";
const fieldLabelClasses =
  "text-sm font-medium leading-snug data-disabled:opacity-50 group/field-label block has-[:disabled,[data-disabled]]:opacity-50 has-data-checked:bg-primary/5 has-data-checked:border-primary/30 dark:has-data-checked:bg-primary/10 has-[>[data-slot=field]]:cursor-pointer has-[>[data-slot=field]]:rounded-xl has-[>[data-slot=field]]:border has-[>[data-slot=field]]:border-border has-[>[data-slot=field]]:not-has-[:disabled,[data-disabled]]:hover:bg-muted/50 has-[>[data-slot=field]]:has-[:focus-visible]:border-ring has-[>[data-slot=field]]:has-[:focus-visible]:ring-ring/40 has-[>[data-slot=field]]:has-[:focus-visible]:ring-3 [&>[data-slot=field]]:p-3";
const InField = React.createContext(false);
const SetDescription = React.createContext<string | undefined>(undefined);
const standaloneState: Primitive.Root.State & Record<string, unknown> = {
  disabled: false,
  touched: false,
  dirty: false,
  valid: null,
  filled: false,
  focused: false,
};
function NativeFieldLabel({
  className,
  render,
  ref,
  style,
  nativeLabel = true,
  ...props
}: Primitive.Label.Props) {
  return useRender({
    defaultTagName: nativeLabel ? "label" : "div",
    render,
    ref,
    state: { ...standaloneState, slot: "field-label" },
    props: mergeProps<"label">(
      {
        className: cn(
          fieldLabelClasses,
          typeof className === "function"
            ? className(standaloneState)
            : className,
        ),
      },
      {
        ...props,
        style: typeof style === "function" ? style(standaloneState) : style,
      },
    ),
  });
}
function NativeFieldDescription({
  className,
  render,
  ref,
  style,
  id,
  ...props
}: Primitive.Description.Props) {
  const setId = React.useContext(SetDescription);
  return useRender({
    defaultTagName: "p",
    render,
    ref,
    state: { ...standaloneState, slot: "field-description" },
    props: mergeProps<"p">(
      {
        id: id ?? setId,
        className: cn(
          "text-sm leading-6 text-muted-foreground",
          typeof className === "function"
            ? className(standaloneState)
            : className,
        ),
      },
      {
        ...props,
        style: typeof style === "function" ? style(standaloneState) : style,
      },
    ),
  });
}
function Field({ className, orientation = "vertical", ...props }: FieldProps) {
  return (
    <InField.Provider value={true}>
      <Primitive.Root
        role="group"
        data-slot="field"
        data-orientation={orientation}
        className={(state) =>
          cn(
            "group/field flex min-w-0 gap-2",
            orientation === "vertical"
              ? "flex-col"
              : orientation === "horizontal"
                ? "flex-row items-start [&>[data-slot=input]]:flex-1 [&>[data-slot=textarea]]:flex-1 [&>[data-slot=select-trigger]]:flex-1"
                : "flex-col @md/field-group:flex-row @md/field-group:items-start @md/field-group:[&>[data-slot=input]]:flex-1 @md/field-group:[&>[data-slot=textarea]]:flex-1 @md/field-group:[&>[data-slot=select-trigger]]:flex-1",
            typeof className === "function" ? className(state) : className,
          )
        }
        {...props}
      />
    </InField.Provider>
  );
}
function FieldLabel({ className, ref, ...props }: Primitive.Label.Props) {
  const motionRef = useStyleMotion<HTMLElement>(ref);
  const inside = React.useContext(InField);
  if (!inside)
    return (
      <NativeFieldLabel ref={motionRef} className={className} {...props} />
    );
  return (
    <Primitive.Label
      ref={motionRef}
      data-slot="field-label"
      className={(state) =>
        cn(
          fieldLabelClasses,
          typeof className === "function" ? className(state) : className,
        )
      }
      {...props}
    />
  );
}
const FieldControl = Primitive.Control;
function FieldDescription({
  className,
  ...props
}: Primitive.Description.Props) {
  const inside = React.useContext(InField);
  if (!inside)
    return <NativeFieldDescription className={className} {...props} />;
  return (
    <Primitive.Description
      data-slot="field-description"
      className={(state) =>
        cn(
          "text-sm leading-6 text-muted-foreground",
          typeof className === "function" ? className(state) : className,
        )
      }
      {...props}
    />
  );
}
function FieldError({
  className,
  errors,
  children,
  ...props
}: Primitive.Error.Props & {
  errors?: Array<{ message?: string } | undefined>;
}) {
  if (errors !== undefined) {
    const messages = [
      ...new Set(
        errors
          .map((error) => error?.message)
          .filter((message): message is string => Boolean(message)),
      ),
    ];
    const content =
      children ??
      (messages.length === 1 ? (
        messages[0]
      ) : messages.length ? (
        <ul className="ms-4 list-disc space-y-1">
          {messages.map((message) => (
            <li key={message}>{message}</li>
          ))}
        </ul>
      ) : null);
    return content ? (
      <Primitive.Error
        match
        role="alert"
        data-slot="field-error"
        className={(state) =>
          cn(
            "text-sm text-destructive",
            typeof className === "function" ? className(state) : className,
          )
        }
        {...props}
      >
        {content}
      </Primitive.Error>
    ) : null;
  }
  return (
    <Primitive.Error
      data-slot="field-error"
      className={(state) =>
        cn(
          "text-sm text-destructive",
          typeof className === "function" ? className(state) : className,
        )
      }
      {...props}
    >
      {children}
    </Primitive.Error>
  );
}
function FieldSet({
  className,
  children,
  ...props
}: React.ComponentProps<"fieldset">) {
  const id = React.useId() + "-description";
  const description = React.Children.toArray(children).find(
    (child) =>
      React.isValidElement<Primitive.Description.Props>(child) &&
      child.type === FieldDescription,
  );
  const descriptionId = React.isValidElement<Primitive.Description.Props>(
    description,
  )
    ? (description.props.id ?? id)
    : undefined;
  return (
    <SetDescription.Provider value={descriptionId}>
      <fieldset
        aria-describedby={descriptionId}
        data-slot="field-set"
        className={cn(
          "@container/field-group group/field-group grid w-full min-w-0 gap-5",
          className,
        )}
        {...props}
      >
        {children}
      </fieldset>
    </SetDescription.Provider>
  );
}
function FieldLegend({
  className,
  variant = "legend",
  ...props
}: React.ComponentProps<"legend"> & { variant?: "legend" | "label" }) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn(
        "mb-3 font-semibold",
        variant === "label" ? "text-sm" : "text-base",
        className,
      )}
      {...props}
    />
  );
}
function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-group"
      className={cn(
        "@container/field-group group/field-group grid w-full min-w-0 gap-5",
        className,
      )}
      {...props}
    />
  );
}
function FieldContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-content"
      className={cn(
        "flex min-w-0 flex-1 flex-col gap-1 leading-snug",
        className,
      )}
      {...props}
    />
  );
}
function FieldTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-label"
      className={cn("text-sm font-medium", className)}
      {...props}
    />
  );
}
function FieldSeparator({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-separator"
      data-content={Boolean(children)}
      className={cn("relative my-2 text-xs text-muted-foreground", className)}
      {...props}
    >
      <Separator className="absolute inset-0 top-1/2" />
      {children && (
        <span
          data-slot="field-separator-content"
          className="relative mx-auto block w-fit bg-background px-2"
        >
          {children}
        </span>
      )}
    </div>
  );
}
export {
  FieldContent,
  FieldTitle,
  FieldSeparator,
  Field,
  FieldLabel,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldSet,
  FieldLegend,
  FieldGroup,
};
export type FieldProps = Primitive.Root.Props & {
  orientation?: "vertical" | "horizontal" | "responsive";
};
