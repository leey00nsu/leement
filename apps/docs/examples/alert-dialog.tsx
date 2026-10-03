"use client";

import { useState } from "react";
import { Button } from "../../../registry/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../../../registry/ui/alert-dialog";

export default function AlertDialogExample() {
  const [message, setMessage] = useState("Item is available");
  return <div className="flex flex-wrap items-center justify-center gap-3"><AlertDialog><AlertDialogTrigger asChild><Button variant="destructive">Delete item</Button></AlertDialogTrigger><AlertDialogContent><AlertDialogHeader><AlertDialogTitle>Delete this item?</AlertDialogTitle><AlertDialogDescription>This action cannot be undone.</AlertDialogDescription></AlertDialogHeader><AlertDialogFooter><AlertDialogCancel>Cancel</AlertDialogCancel><AlertDialogAction onClick={() => setMessage("Item deleted")}>Delete</AlertDialogAction></AlertDialogFooter></AlertDialogContent></AlertDialog><span role="status" className="text-sm text-muted-foreground">{message}</span></div>;
}
