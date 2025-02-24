"use client";

import { useEditor, EditorContent, FloatingMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  ALargeSmall,
  Bold,
  ChevronDown,
  Code2,
  CodeSquare,
  Italic,
  List,
  ListOrdered,
  LucideTextQuote,
  Plus,
  Quote,
  Underline,
} from "lucide-react";
import { Separator } from "../ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Heading from "@tiptap/extension-heading";
import clsx from "clsx";
import OrderedList from "@tiptap/extension-ordered-list";
import Blockquote from "@tiptap/extension-blockquote";

const TextEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit,Heading.configure({
      levels:[1,2,3,4]
    }),OrderedList,Blockquote],
    content: "<p>Hello World! 🌎️</p>",
    autofocus: true,
    editorProps: {
      attributes: {
        class: "focus:outline-none",
      },
    },
  });

  return (
    <div className=" w-full  h-full flex justify-center relative ">
      <EditorContent
        editor={editor}
        className=" w-full h-full m-4  max-w-xl "
      />
      <div className=" border-2     h-11 absolute bottom-2 p-1 flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button className=" h-full hover:bg-secondary p-1 flex  ">
              <ALargeSmall className=" w-6 h-6 m-auto " />
              <ChevronDown className=" w-4 my-auto " />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className=" text-2xl font-extrabold" onClick={(e)=>{ editor?.chain().focus().setHeading({level:1}).run()}} >Heading 1</DropdownMenuItem>
            <DropdownMenuItem className=" text-xl font-bold " onClick={()=>editor?.chain().focus().setHeading({level:2}).run()} >Heading 2</DropdownMenuItem>
            <DropdownMenuItem className=" text-lg font-medium " onClick={()=>editor?.chain().focus().setHeading({level:3}).run()}>Heading 3</DropdownMenuItem>
            <DropdownMenuItem className=" text-md font-semibold " onClick={()=>editor?.chain().focus().setHeading({level:4}).run()}>Heading 4</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Separator orientation="vertical" />
        <div className=" flex gap-1">
          <button  className={
            clsx("h-full hover:bg-secondary p-1 flex",{
              "bg-secondary":editor?.isActive("bold")
            })
          } onClick={()=>editor?.chain().focus().toggleBold().run()}>
            <Bold className=" w-6 h-5 m-auto " />
          </button>
          <button className={
            clsx("h-full hover:bg-secondary p-1 flex",{
              "bg-secondary":editor?.isActive("italic")
            })
          } onClick={()=>editor?.chain().focus().toggleItalic().run()} >
            <Italic className=" w-6 h-5 m-auto " />
          </button>
          <button className={
            clsx("h-full hover:bg-secondary p-1 flex",{
              "bg-secondary":editor?.isActive("strike")
            })
          } onClick={(e)=>{
            e.preventDefault()
            editor?.chain().focus().toggleStrike().run()
          }} >
            <Underline className=" w-6 h-5 m-auto " />
          </button>
        </div>
        <Separator orientation="vertical" />
        <div className=" flex gap-1">
        <DropdownMenu>
          <DropdownMenuTrigger>
          <button className=" h-full hover:bg-secondary p-1 flex  ">
            <List className=" w-6 h-5 m-auto " />
            <ChevronDown className=" w-4 my-auto " />
          </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={()=>editor?.chain().focus().toggleOrderedList().run()}  className=" cursor-pointer" >
            <ListOrdered />
              Numbered list
            </DropdownMenuItem>
            <DropdownMenuItem onClick={(e)=>{
              e.preventDefault()
              editor?.chain().focus().toggleBulletList().run()
            }} className=" cursor-pointer" >
            <List />
              Bullet list</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

          
          <button className={
            clsx(" h-full hover:bg-secondary p-1 flex",{
              "bg-secondary":editor?.isActive("code")
            })
          }>
            <Code2 className=" w-6 h-5 m-auto " />
          </button>
          <button className={
            clsx("h-full hover:bg-secondary p-1 flex",{
              " bg-secondary":editor?.isActive("blockquote")
            })
          } onClick={()=>editor?.chain().focus().toggleBlockquote().run()}>
            <LucideTextQuote className=" w-6 h-5 m-auto " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
