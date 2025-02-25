"use client";

import { useEditor, EditorContent, FloatingMenu, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";



import Heading from "@tiptap/extension-heading";
import OrderedList from "@tiptap/extension-ordered-list";
import Blockquote from "@tiptap/extension-blockquote";
import Placeholder from "@tiptap/extension-placeholder";
import Paragraph from '@tiptap/extension-paragraph'

import Toolbar from "./Toolbar";
import CodeBlock from "@tiptap/extension-code-block";
import HorizontalRule from "@tiptap/extension-horizontal-rule";

const TextEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit,Heading.configure({
      levels:[1,2,3,4]
    }),OrderedList,Blockquote,Placeholder.configure({
      placeholder: "Start writing document here...",
    }),Paragraph.extend({
      draggable:true
    }),
    CodeBlock,
    HorizontalRule
    ],
    content: "<p>Hello World! 🌎️</p>",
    autofocus: true,
    editorProps: {
      attributes: {
        class: "focus:outline-none",
      },
    },
  });

  return (
    <div className=" w-full  h-full  flex justify-center p-4  ">
      <EditorContent
        editor={editor}
        className=" w-full h-full overflow-y-scroll m-4  max-w-xl "
      />
        <Toolbar editor={editor as Editor} />
    </div>
  );
};

export default TextEditor;
