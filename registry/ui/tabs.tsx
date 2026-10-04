"use client";
import { useStyleMotion } from "@/lib/leement-motion";


import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

function Tabs({ className, orientation = "horizontal", ...props }: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      orientation={orientation}
      className={cn("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col", className)}
      {...props}
    />
  );
}

const tabsListVariants = cva(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-md p-[3px] text-muted-foreground group-data-[orientation=horizontal]/tabs:h-10 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-1 bg-transparent",
        segmented: "h-12 w-full gap-1 rounded-lg bg-muted/60 p-1",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function TabsList({
  className,
  variant = "default",
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  );
}

function TabsTrigger({ ref: motionForwardedRef, className, children, ...props }: TabsPrimitive.Tab.Props) {
  const styleMotionRef1 = useStyleMotion<HTMLButtonElement>(motionForwardedRef);
  const indicatorRef = useStyleMotion<HTMLSpanElement>(undefined, ["opacity"]);

  return (
    <TabsPrimitive.Tab ref={styleMotionRef1}
      data-slot="tabs-trigger"
      className={cn(
        "group/tab relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-sm border border-transparent px-3 py-1 text-sm font-medium whitespace-nowrap text-muted-foreground group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/40 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent",
        "group-data-[variant=segmented]/tabs-list:h-10 group-data-[variant=segmented]/tabs-list:rounded-lg group-data-[variant=segmented]/tabs-list:data-active:border-muted-foreground group-data-[variant=segmented]/tabs-list:data-active:shadow-sm",
        "data-active:bg-background data-active:text-foreground",
        className,
      )}
      {...props}
    >
      {children}
      <span aria-hidden="true" ref={indicatorRef} className="pointer-events-none absolute bg-foreground opacity-0 group-data-[orientation=horizontal]/tabs:inset-x-0 group-data-[orientation=horizontal]/tabs:bottom-[-5px] group-data-[orientation=horizontal]/tabs:h-0.5 group-data-[orientation=vertical]/tabs:inset-y-0 group-data-[orientation=vertical]/tabs:-right-1 group-data-[orientation=vertical]/tabs:w-0.5 group-data-[variant=line]/tabs-list:group-data-active/tab:opacity-100" />
    </TabsPrimitive.Tab>
  );
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel data-slot="tabs-content" className={cn("flex-1 text-sm outline-none", className)} {...props} />
  );
}

export { Tabs, TabsContent, TabsList, TabsTrigger, tabsListVariants };
