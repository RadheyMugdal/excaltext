import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2, Trash2 } from "lucide-react";
import { useDeleteFile } from "@/hooks/files/useDeleteFile";

const DeleteFileDialog = ({
  open,
  setOpen,
  id,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}) => {
  const { mutateAsync, isPending } = useDeleteFile();
  const handleDeleteFile = async () => {
    await mutateAsync({ id });
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className=" text-xl">Delete File</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            File.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant={"destructive"}
            onClick={handleDeleteFile}
            disabled={isPending}
          >
            {isPending ? (
              <Loader2 className=" w-4 h-4 animate-spin" />
            ) : (
              <>
                <Trash2 />
                Delete File
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteFileDialog;
