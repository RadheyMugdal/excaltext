import React from "react";
import {
  ALargeSmall,
  Bold,
  ChevronDown,
  Code2,
  Italic,
  List,
  ListOrdered,
  LucideTextQuote,
  Minus,
  Underline,
} from "lucide-react";
import { Editor } from "@tiptap/core";
import { Separator } from "@/components/ui/separator";
import clsx from "clsx";
import CustomDropdownMenu, {
  CustomDropdownContent,
  CustomDropDownMenuItem,
  CustomDropdownTrigger,
} from "./CustomDropdownMenu";

interface ToolbarProps {
  editor: Editor;
}

const Toolbar: React.FC<ToolbarProps> = ({ editor }) => {
  return (
    <div className=" border-2 rounded-md h-11 absolute bottom-2 p-1 flex gap-2">
      <CustomDropdownMenu>
        <CustomDropdownTrigger>
          <div className=" flex  items-center justify-center">
            <ALargeSmall className=" w-6 h-6 m-auto " />
            <ChevronDown className=" w-4" />
          </div>
        </CustomDropdownTrigger>
        <CustomDropdownContent>
          <CustomDropDownMenuItem
            className=" text-3xl font-bold "
            onClick={() => {
              editor.chain().focus().setHeading({ level: 1 }).run();
            }}
          >
            Heading 1
          </CustomDropDownMenuItem>
          <CustomDropDownMenuItem
            className=" text-xl font-semibold"
            onClick={() => {
              editor.chain().focus().setHeading({ level: 2 }).run();
            }}
          >
            Heading 2
          </CustomDropDownMenuItem>
          <CustomDropDownMenuItem
            className=" text-lg font-medium"
            onClick={() => {
              editor.chain().focus().setHeading({ level: 3 }).run();
            }}
          >
            Heading 3
          </CustomDropDownMenuItem>
          <CustomDropDownMenuItem
            className=" text-md font-normal"
            onClick={() => {
              editor.chain().focus().setHeading({ level: 4 }).run();
            }}
          >
            Heading 4
          </CustomDropDownMenuItem>
        </CustomDropdownContent>
      </CustomDropdownMenu>

      <Separator orientation="vertical" className=" bg-foreground/40" />
      <div className=" flex gap-1">
        <button
          className={clsx("h-full hover:bg-secondary  rounded-md p-1 flex", {
            "bg-secondary": editor?.isActive("bold"),
          })}
          onClick={() => editor?.chain().focus().toggleBold().run()}
        >
          <Bold className=" w-6 h-5 m-auto " />
        </button>
        <button
          className={clsx("h-full hover:bg-secondary  rounded-md p-1 flex", {
            "bg-secondary": editor?.isActive("italic"),
          })}
          onClick={() => editor?.chain().focus().toggleItalic().run()}
        >
          <Italic className=" w-6 h-5 m-auto " />
        </button>
        <button
          className={clsx("h-full hover:bg-secondary  rounded-md p-1 flex", {
            "bg-secondary": editor?.isActive("strike"),
          })}
          onClick={(e) => {
            e.preventDefault();
            editor?.chain().focus().toggleStrike().run();
          }}
        >
          <Underline className=" w-6 h-5 m-auto " />
        </button>
      </div>
      <Separator orientation="vertical" className=" bg-foreground/40" />
      <div className=" flex gap-1">
        <CustomDropdownMenu>
          <CustomDropdownTrigger>
            <div className="  flex ">
              <List className=" w-6 h-5 m-auto " />
              <ChevronDown className=" w-4 my-auto " />
            </div>
          </CustomDropdownTrigger>
          <CustomDropdownContent>
            <CustomDropDownMenuItem
              className=" "
              onClick={() => {
                editor.chain().focus().toggleOrderedList().run();
              }}
            >
              <div className=" flex items-center gap-2 justify-center">
                <ListOrdered className=" w-4 h-5" />
                Numbered list
              </div>
            </CustomDropDownMenuItem>
            <CustomDropDownMenuItem
              className=" "
              onClick={() => {
                editor.chain().focus().toggleBulletList().run();
              }}
            >
              <div className=" flex items-center gap-2 justify-center">
                <List className=" w-4 h-5" />
                Bullet list
              </div>
            </CustomDropDownMenuItem>
          </CustomDropdownContent>
        </CustomDropdownMenu>

        <button
          className={clsx(" h-full hover:bg-secondary  p-1 rounded-md flex", {
            "bg-secondary": editor?.isActive("codeBlock"),
          })}
          onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
        >
          <Code2 className=" w-6 h-5 m-auto " />
        </button>
        <button
          className={clsx("h-full hover:bg-secondary p-1 rounded-md flex", {
            " bg-secondary": editor?.isActive("blockquote"),
          })}
          onClick={() => editor?.chain().focus().toggleBlockquote().run()}
        >
          <LucideTextQuote className=" w-6 h-5 m-auto " />
        </button>

        <button
          className={clsx("h-full hover:bg-secondary p-1 rounded-md flex", {
            " bg-secondary": editor?.isActive("blockquote"),
          })}
          onClick={() => editor?.chain().focus().setHorizontalRule().run()}
        >
          <Minus className=" w-6 h-5 m-auto " />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
