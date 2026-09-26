import { Button } from "../../../registry/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../../registry/ui/tooltip";

export default function TooltipExample() {
  return <TooltipProvider><Tooltip>
    <TooltipTrigger asChild><Button variant="outline">Hover or focus</Button></TooltipTrigger>
    <TooltipContent>More information</TooltipContent>
  </Tooltip></TooltipProvider>;
}
