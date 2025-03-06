import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const WorkspaceSettingDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [workspaceName, setWorkspaceName] = useState("");
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className=" w-full max-w-2xl ">
        <DialogHeader>
          <DialogTitle className=" text-2xl flex gap-2 items-center">
            <Settings />
            Workspace setting
          </DialogTitle>
          <DialogDescription className=" flex flex-col gap-4">
            {" "}
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <div className=" flex flex-col gap-2">
          <label htmlFor="" className=" text-xs">
            Workspace name*
          </label>
          <Input
            value={workspaceName}
            onChange={(e) => setWorkspaceName(e.target.value)}
          />
        </div>
        <div className=" w-full border-red-500 border p-4 rounded-md bg-secondary   flex flex-col gap-4">
          <h1 className=" font-bold ">Danger zone</h1>
          <p className=" text-sm">
            Proceed with caution, once completed this action cannot be undone.
          </p>
          <Button className=" w-fit " variant={"destructive"}>
            Delete workspace
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WorkspaceSettingDialog;
