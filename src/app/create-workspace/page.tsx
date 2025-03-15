import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

function page() {
  return (
    <div className=" w-screen h-screen flex flex-col justify-center items-center">
      <div className=" max-w-md w-full bg-card border-2 px-4 py-8 flex flex-col gap-7 rounded-md">
        <div>
          <p className=" text-xs text-foreground/60">there is no workspace.</p>
          <h1 className=" text-2xl  font-bold">
            Create a new workspace to get started
          </h1>
        </div>
        <div className=" flex flex-col">
          <label htmlFor="" className=" text-xs">
            Workspace name*
          </label>
          <Input
            type="text"
            placeholder="Workspace name"
            className=" mt-1/2 "
            autoFocus
          />
        </div>
        <Button>Create new workspace</Button>
      </div>
    </div>
  );
}

export default page;
