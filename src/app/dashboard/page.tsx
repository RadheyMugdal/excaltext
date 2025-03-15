"use client";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import CreateNewFileDialog from "@/components/dashboard/dialogs/CreateNewFileDialog";
import DeleteFileDialog from "@/components/dashboard/dialogs/DeleteFileDialog";
import RenameFileDialog from "@/components/dashboard/dialogs/RenameFileDialog";
import ProjectList from "@/components/dashboard/ProjectList";
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
import { useGetFiles } from "@/hooks/files/useGetFiles";
import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { match } from "ts-pattern";

export default function Page() {
  const page = useSearchParams().get("page");
  const limit = "12";
  const [fileName, setFileName] = useState<string>("");
  const [renameFileDialogOpen, setRenameFileDialogOpen] = useState(false);
  const [deleteFileDialogOpen, setDeleteFileDialogOpen] = useState(false);
  const [createNewFileDialogOpen, setCreateNewFileDialogOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string>("");
  const { data, status } = useGetFiles(page as string, limit, fileName);

  const ProjectListView = match(status)
    .with("success", () => (
      <ProjectList
        data={data}
        setSelectedFile={setSelectedFile}
        deleteFileDialogOpen={deleteFileDialogOpen}
        renameFileDialogOpen={renameFileDialogOpen}
        setDeleteFileDialogOpen={setDeleteFileDialogOpen}
        setRenameFileDialogOpen={setRenameFileDialogOpen}
        setCreateNewFileDialogOpen={setCreateNewFileDialogOpen}
      />
    ))
    .with("pending", () => <ProjectListSkeleton />)
    .with("error", () => (
      <p className="text-red-500">Failed to load workspace data.</p>
    ))
    .exhaustive();

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
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
              />
            </div>
            <Button onClick={() => setCreateNewFileDialogOpen(true)}>
              Create new file
            </Button>
          </div>
          {ProjectListView}
        </div>
        <RenameFileDialog
          id={selectedFile}
          open={renameFileDialogOpen}
          setOpen={setRenameFileDialogOpen}
        />
        <DeleteFileDialog
          id={selectedFile}
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
