import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const ProjectListSkeleton = () => {
  return (
    <div className="  flex-1 py-6 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]  gap-3 grid-rows-3 ">
      <Skeleton className=" w-full h-full" />
      <Skeleton className=" w-full h-full" />
      <Skeleton className=" w-full h-full" />
      <Skeleton className=" w-full h-full" />
      <Skeleton className=" w-full h-full" />
      <Skeleton className=" w-full h-full" />
      <Skeleton className=" w-full h-full" />
      <Skeleton className=" w-full h-full" />
      <Skeleton className=" w-full h-full" />
      <Skeleton className=" w-full h-full" />
      <Skeleton className=" w-full h-full" />
      <Skeleton className=" w-full h-full" />
    </div>
  );
};

export default ProjectListSkeleton;
