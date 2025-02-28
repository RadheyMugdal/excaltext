import React from "react";
import { Button } from "../ui/button";

const CreateProject = ({
  setCreateNewFileDialogOpen,
}: {
  setCreateNewFileDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className=" flex-1 flex flex-col gap-4 justify-center items-center">
      There is no files in this project. Create a new file to get started.
      <Button onClick={() => setCreateNewFileDialogOpen(true)}>
        Create new file
      </Button>
    </div>
  );
};

export default CreateProject;
