"use client";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import CreateProject from "@/components/dashboard/CreateProject";
import CreateNewFileDialog from "@/components/dashboard/dialogs/CreateNewFileDialog";
import DeleteFileDialog from "@/components/dashboard/dialogs/DeleteFileDialog";
import RenameFileDialog from "@/components/dashboard/dialogs/RenameFileDialog";
import ProjectCard from "@/components/dashboard/ProjectCard";
import ProjectListSkeleton from "@/components/dashboard/skeletons/ProjectListSkeleton";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { PaginationWithLinks } from "@/components/ui/pagination-with-link";
import { Separator } from "@/components/ui/separator";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Search, Settings2 } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [renameFileDialogOpen, setRenameFileDialogOpen] = useState(false);
  const [deleteFileDialogOpen, setDeleteFileDialogOpen] = useState(false);
  const [createNewFileDialogOpen, setCreateNewFileDialogOpen] = useState(false);
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>workspace</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className=" flex-1 flex flex-col  py-2 px-6">
          <div className=" w-full flex items-center justify-between ">
            <div className=" relative  bg-secondary inline-block    rounded-md overflow-hidden max-w-sm w-full ">
              <Search className=" absolute top-1/2 -translate-y-1/2 left-2  w-4 h-4 " />
              <input
                type="text"
                placeholder="Search files "
                className=" p-2 ml-6 w-[90%] bg-secondary border-none outline-none "
              />
            </div>
            <Button onClick={() => setCreateNewFileDialogOpen(true)}>
              Create new file
            </Button>
          </div>
          {/* If There is no files show below component */}
          {/* <CreateProject
            setCreateNewFileDialogOpen={setCreateNewFileDialogOpen}
          /> */}
          {/* If files are loading show below skeleton */}
          {/* <ProjectListSkeleton /> */}
          <div className=" flex-1 flex flex-col">
            <div className="  flex-1 py-6 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]  gap-3 grid-rows-3 ">
              <ProjectCard
                id="1"
                name="Untitled file"
                lastUpdated="2 days ago"
                renameFileDialogOpen={renameFileDialogOpen}
                setRenameFileDialogOpen={setRenameFileDialogOpen}
                setDeleteFileDialogOpen={setDeleteFileDialogOpen}
                deleteFileDialogOpen={deleteFileDialogOpen}
              />
            </div>
            <PaginationWithLinks page={1} totalCount={200} pageSize={10} />
          </div>
        </div>
        <RenameFileDialog
          open={renameFileDialogOpen}
          setOpen={setRenameFileDialogOpen}
        />
        <DeleteFileDialog
          open={deleteFileDialogOpen}
          setOpen={setDeleteFileDialogOpen}
        />
        <CreateNewFileDialog
          open={createNewFileDialogOpen}
          setOpen={setCreateNewFileDialogOpen}
        />
      </SidebarInset>
    </SidebarProvider>
  );
}
