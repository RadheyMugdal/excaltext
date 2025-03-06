"use client";

import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import Heading from "@tiptap/extension-heading";
import OrderedList from "@tiptap/extension-ordered-list";
import Blockquote from "@tiptap/extension-blockquote";
import Placeholder from "@tiptap/extension-placeholder";
import Paragraph from "@tiptap/extension-paragraph";

import Toolbar from "./Toolbar";
import CodeBlock from "@tiptap/extension-code-block";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import debounce from "lodash.debounce";

const TextEditor = () => {
  const debouncedOnUpdate = debounce(({ editor }: { editor: any }) => {
    const content = editor.getHTML();
    //store on db logic
  }, 2000);
  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading.configure({
        levels: [1, 2, 3, 4],
      }),
      OrderedList,
      Blockquote,
      Placeholder.configure({
        placeholder: "Start writing document here...",
      }),
      Paragraph.extend({
        draggable: true,
      }),
      CodeBlock,
      HorizontalRule,
    ],
    content: "<p>Hello World! 🌎️</p>",
    autofocus: true,
    editorProps: {
      attributes: {
        class: "focus:outline-none",
      },
    },
    onUpdate: debouncedOnUpdate,
  });

  return (
    <div className="w-full h-full flex justify-center p-4">
      <div className="w-full max-w-xl h-[90%] flex flex-col  rounded-lg">
        {/* Make this wrapper take full height and allow scrolling inside */}
        <div className="flex-1 overflow-hidden relative">
          <EditorContent
            editor={editor}
            className="absolute inset-0 overflow-auto p-4"
          />
        </div>
        <Toolbar editor={editor as Editor} />
      </div>
    </div>
  );
};

export default TextEditor;
