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
import { Trash2 } from "lucide-react";

const DeleteFileDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
          <Button variant={"destructive"}>
            <Trash2 />
            Delete File
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteFileDialog;
