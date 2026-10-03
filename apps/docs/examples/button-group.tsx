"use client";
import { ButtonGroup } from "../../../registry/ui/button-group";
import { Button } from "../../../registry/ui/button";
export default function ButtonGroupExample() {

return (<ButtonGroup aria-label="Document actions"><Button variant="outline">Save</Button><Button variant="outline">Share</Button><Button variant="outline" disabled>Archive</Button></ButtonGroup>);
}
