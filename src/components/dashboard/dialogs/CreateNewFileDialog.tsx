import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CreateNewFileDialog = ({
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
          <DialogTitle className=" text-xl">Create new file</DialogTitle>
        </DialogHeader>
        <div className=" flex flex-col gap-5">
          <div>
            <label htmlFor="" className=" text-xs">
              File name*
            </label>
            <Input placeholder="Enter file name" />
          </div>
          <Button>Create new file</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNewFileDialog;
