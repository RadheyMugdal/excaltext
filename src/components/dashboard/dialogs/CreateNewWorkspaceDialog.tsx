import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CreateNewWorkspaceDialog = ({
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
          <DialogTitle className=" text-xl">Create Workspace</DialogTitle>
        </DialogHeader>
        <div className=" flex flex-col gap-5">
          <div>
            <label htmlFor="" className=" text-xs">
              Workspace name*
            </label>
            <Input placeholder="Enter workspace name" />
          </div>
          <Button>Create new workspace</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNewWorkspaceDialog;
