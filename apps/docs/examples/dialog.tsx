import { Button } from "../../../registry/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../../../registry/ui/dialog";
import { Input } from "../../../registry/ui/input";

export default function DialogExample() {
  return <Dialog>
    <DialogTrigger asChild><Button>Open dialog</Button></DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit workspace</DialogTitle>
        <DialogDescription>Update details for your team.</DialogDescription>
      </DialogHeader>
      <Input aria-label="Workspace name" defaultValue="Studio" />
    </DialogContent>
  </Dialog>;
}
