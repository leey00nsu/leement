"use client";
import * as React from "react";
import { ToggleGroup as Primitive } from "@base-ui/react/toggle-group";
import { Toggle, type ToggleProps } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";
type GroupStyle = Pick<ToggleProps,"variant"|"size"> & {spacing?:number};
const StyleContext = React.createContext<GroupStyle>({});
type ToggleGroupProps = Primitive.Props & GroupStyle;
function ToggleGroup({ className, children, variant, size, spacing = 2, orientation = "horizontal", style, ...props }: ToggleGroupProps) {
  return <Primitive data-slot="toggle-group" data-orientation={orientation} data-spacing={spacing} style={state=>({"--gap":spacing,...(typeof style === "function" ? style(state) : style)} as React.CSSProperties)} className={state => cn("group/toggle-group flex w-fit max-w-full flex-wrap gap-[--spacing(var(--gap))] data-[orientation=vertical]:flex-col", typeof className === "function" ? className(state) : className)} orientation={orientation} {...props}><StyleContext.Provider value={{variant,size,spacing}}>{children}</StyleContext.Provider></Primitive>;
}
function ToggleGroupItem({variant,size,className,...props}:ToggleProps) {
  const context=React.useContext(StyleContext);
  return <Toggle data-slot="toggle-group-item" variant={context.variant ?? variant} size={context.size ?? size} className={state=>cn("focus-visible:z-10 group-data-[spacing=0]/toggle-group:group-data-[orientation=horizontal]/toggle-group:rounded-none group-data-[spacing=0]/toggle-group:group-data-[orientation=horizontal]/toggle-group:first:rounded-s-md group-data-[spacing=0]/toggle-group:group-data-[orientation=horizontal]/toggle-group:last:rounded-e-md group-data-[spacing=0]/toggle-group:group-data-[orientation=vertical]/toggle-group:rounded-none group-data-[spacing=0]/toggle-group:group-data-[orientation=vertical]/toggle-group:first:rounded-t-md group-data-[spacing=0]/toggle-group:group-data-[orientation=vertical]/toggle-group:last:rounded-b-md",typeof className === "function" ? className(state):className)} {...props} />;
}
export { ToggleGroup, ToggleGroupItem };
export type { ToggleGroupProps };
