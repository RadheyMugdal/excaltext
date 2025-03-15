import React from "react";
import ProjectCard from "./ProjectCard";
import { PaginationWithLinks } from "../ui/pagination-with-link";
import CreateProject from "./CreateProject";

interface ProjectListProps {
  renameFileDialogOpen: boolean;
  setRenameFileDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deleteFileDialogOpen: boolean;
  setDeleteFileDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
  setCreateNewFileDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedFile: React.Dispatch<React.SetStateAction<string>>;
}
const ProjectList: React.FC<ProjectListProps> = ({
  renameFileDialogOpen,
  setRenameFileDialogOpen,
  deleteFileDialogOpen,
  setDeleteFileDialogOpen,
  setCreateNewFileDialogOpen,
  setSelectedFile,
  data,
}) => {
  return (
    <div className=" flex-1 flex flex-col">
      {data.filesData.length === 0 ? (
        <CreateProject
          setCreateNewFileDialogOpen={setCreateNewFileDialogOpen}
        />
      ) : (
        <>
          <div className="  flex-1 py-6 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]  gap-3 grid-rows-3 ">
            {data.filesData.map((file: any) => (
              <ProjectCard
                setSelectedFile={setSelectedFile}
                key={file.id}
                id={file.id}
                name={file.name}
                lastUpdated="2 days ago"
                renameFileDialogOpen={renameFileDialogOpen}
                setRenameFileDialogOpen={setRenameFileDialogOpen}
                setDeleteFileDialogOpen={setDeleteFileDialogOpen}
                deleteFileDialogOpen={deleteFileDialogOpen}
              />
            ))}
          </div>
          {data.totalFiles > 12 && (
            <PaginationWithLinks
              page={1}
              totalCount={data.totalFiles}
              pageSize={12}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ProjectList;
