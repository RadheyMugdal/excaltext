import { Ellipsis, Link2, Pencil, Trash2 } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { ViewType } from "@/app/file/page";
import clsx from "clsx";

const Header = ({
  setSelectedType,
  selectedType,
}: {
  setSelectedType: React.Dispatch<React.SetStateAction<ViewType>>;
  selectedType: ViewType;
}) => {
  return (
    <div className=" w-full h-fit flex p-4 border-b justify-between items-center">
      <div className=" inline-flex  items-center justify-center gap-2 ">
        <h1>Untitled file</h1>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Ellipsis className=" w-5 pt-1" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Pencil />
              Rename file
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash2 />
              Delete file
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className=" h-full">
        <div className=" flex border-2    ">
          <button
            className={clsx(
              " flex items-center justify-center w-20 py-1 border-r hover:bg-secondary active:bg-secondary transition-colors duration-150 ease-in-out ",
              {
                "bg-secondary": selectedType === "doc",
              }
            )}
            onClick={() => setSelectedType("doc")}
          >
            Doc
          </button>
          <button
            className={clsx(
              " flex items-center justify-center w-20 py-1 border-r  hover:bg-secondary transition-colors duration-150 ease-in-out ",
              {
                "bg-secondary": selectedType === "both",
              }
            )}
            onClick={() => setSelectedType("both")}
          >
            Both
          </button>
          <button
            className={clsx(
              " flex items-center justify-center w-20 py-1  hover:bg-secondary transition-colors duration-150 ease-in-out ",
              {
                "bg-secondary": selectedType === "canvas",
              }
            )}
            onClick={() => setSelectedType("canvas")}
          >
            Canvas
          </button>
        </div>
      </div>
      <div>
        <Button>
          <Link2 />
          Share
        </Button>
      </div>
    </div>
  );
};

export default Header;
