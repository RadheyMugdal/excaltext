import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Pencil, Settings2, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ProjectCardProps {
  id: string;
  name: string;
  lastUpdated: string;
  renameFileDialogOpen: boolean;
  setRenameFileDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDeleteFileDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deleteFileDialogOpen: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  name,
  lastUpdated,
  renameFileDialogOpen,
  setRenameFileDialogOpen,
  setDeleteFileDialogOpen,
  deleteFileDialogOpen,
}) => {
  return (
    <Card className=" h-fit bg-secondary/50" id={id}>
      <CardHeader className=" px-6 py-4">
        <CardTitle className=" text-2xl  font-semibold">{name}</CardTitle>
        <CardDescription className=" text-sm text-muted-foreground">
          Last updated {lastUpdated}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className=" w-full flex items-center gap-5">
          <button className=" flex-1 p-2 bg-background rounded-md outline hover:bg-background/90 ">
            Open
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className=" hover:bg-secondary  p-2 rounded-md">
                <Settings2 />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setRenameFileDialogOpen(true)}>
                <Pencil />
                Rename file
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDeleteFileDialogOpen(true)}>
                <Trash2 />
                Delete file
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
