import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRenameFile } from "@/hooks/files/useRenameFile";
import { Loader2 } from "lucide-react";

const RenameFileDialog = ({
  open,
  setOpen,
  id,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}) => {
  const { mutateAsync, isPending } = useRenameFile();
  const [fileName, setFileName] = React.useState("");
  const handleRenameFile = async () => {
    await mutateAsync({ id, name: fileName });
    setOpen(false);
    setFileName("");
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader className=" space-y-2">
          <DialogTitle className=" text-xl">Rename file</DialogTitle>
        </DialogHeader>
        <div className=" flex flex-col gap-5">
          <div>
            <label htmlFor="" className=" text-xs">
              File name*
            </label>
            <Input
              placeholder="Enter file name"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
            />
          </div>
          <Button disabled={isPending} onClick={handleRenameFile}>
            {isPending && <Loader2 className=" w-4 h-4 animate-spin" />}
            Rename file
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RenameFileDialog;
