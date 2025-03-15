import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateFile } from "@/hooks/files/useCreateFile";
import { Loader2 } from "lucide-react";

const CreateNewFileDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [fileName, setFileName] = React.useState("");
  const { mutateAsync, isPending } = useCreateFile();
  const handleCreateFile = async () => {
    await mutateAsync({ name: fileName });
    setOpen(false);
    setFileName("");
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className=" text-xl">Create new file</DialogTitle>
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
          <Button onClick={handleCreateFile} disabled={isPending}>
            {isPending ? (
              <Loader2 className=" w-4 h-4 animate-spin" />
            ) : (
              "Create new file"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNewFileDialog;
