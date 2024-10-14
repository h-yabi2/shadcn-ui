import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>Open</button>
      </DialogTrigger>
      <DialogContent className="bg-white">説明</DialogContent>
    </Dialog>
  );
}
