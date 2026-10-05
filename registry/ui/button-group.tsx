"use client";
import { useRender } from "@base-ui/react/use-render";
import { mergeProps } from "@base-ui/react/merge-props";
import { cva, type VariantProps } from "class-variance-authority";
import { Separator } from "@/components/ui/separator";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
function ButtonGroup({ orientation = "horizontal", className, ...props }: ComponentProps<"div"> & { orientation?: "horizontal" | "vertical" }) {
  return <div role="group" data-slot="button-group" data-orientation={orientation} className={cn("isolate inline-flex max-w-full [&>button]:relative [&>a]:relative [&>*:focus-visible]:z-10", orientation === "horizontal" ? "[&>*:not(:first-child)]:-ms-px [&>*:not(:first-child)]:rounded-s-none [&>*:not(:last-child)]:rounded-e-none" : "flex-col [&>*:not(:first-child)]:-mt-px [&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none", className)} {...props} />;
}
const buttonGroupVariants = cva("isolate inline-flex max-w-full", {variants:{orientation:{horizontal:"[&>*:not(:first-child)]:-ms-px [&>*:not(:first-child)]:rounded-s-none [&>*:not(:last-child)]:rounded-e-none",vertical:"flex-col [&>*:not(:first-child)]:-mt-px [&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none"}},defaultVariants:{orientation:"horizontal"}});
function ButtonGroupText({className,render,...props}:useRender.ComponentProps<"div">) { return useRender({defaultTagName:"div", render, state:{slot:"button-group-text"}, props:mergeProps<"div">({className:cn("flex items-center gap-2 rounded-md border border-border bg-muted px-3 text-sm [&_svg]:size-4",className)},props)}); }
function ButtonGroupSeparator({className,orientation="vertical",...props}:ComponentProps<typeof Separator>) {return <Separator data-slot="button-group-separator" orientation={orientation} className={cn("relative self-stretch data-[orientation=horizontal]:w-auto data-[orientation=vertical]:h-auto",className)} {...props} />;}
export { ButtonGroup, ButtonGroupText, ButtonGroupSeparator, buttonGroupVariants };
export type ButtonGroupProps = ComponentProps<"div"> & VariantProps<typeof buttonGroupVariants>;
