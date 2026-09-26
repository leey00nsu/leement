"use client";

import { Button } from "../../../registry/ui/button";
import { Toaster, toast } from "../../../registry/ui/toast";

export default function ToastExample() {
  return <><Button variant="outline" onClick={() => toast.success("Changes saved")}>Show toast</Button><Toaster position="bottom-right" /></>;
}
