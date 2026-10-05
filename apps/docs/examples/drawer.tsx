"use client";
import { useState } from "react";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "../../../registry/ui/drawer";
import { Button } from "../../../registry/ui/button";
export default function DrawerExample() {const [open,setOpen]=useState(false);return <Drawer open={open} onOpenChange={setOpen} showSwipeHandle><DrawerTrigger render={<Button variant="outline" />}>Review settings</DrawerTrigger><DrawerContent><DrawerHeader><DrawerTitle>Workspace settings</DrawerTitle><DrawerDescription>Review changes before applying them.</DrawerDescription></DrawerHeader><div className="p-6 text-sm">App data and saving belong to your project.</div><DrawerFooter><Button onClick={()=>setOpen(false)}>Apply changes</Button><DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose></DrawerFooter></DrawerContent></Drawer>;}
