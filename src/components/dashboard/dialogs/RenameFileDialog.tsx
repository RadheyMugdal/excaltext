import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const RenameFileDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
            <Input placeholder="Enter file name" />
          </div>
          <Button>Rename file</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RenameFileDialog;
