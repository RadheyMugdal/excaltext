"use client"
import Tldraw from "@/components/editor/canvas/Tldraw";
import Header from "@/components/editor/Header";
import TextEditor from "@/components/editor/TextEditor/TextEditor";
import Image from "next/image";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useState } from "react";
export type ViewType = "doc" | "both" | "canvas";
export default function Home() {
  const [selectedType, setSelectedType] = useState<ViewType>("both");
  return (
    <div className=" w-screen h-screen flex flex-col overflow-hidden  ">
      {/* header  */}
      <Header setSelectedType={setSelectedType} selectedType={selectedType} />
      {/* main content  */}

        {selectedType === "both" ? (
          <ResizablePanelGroup direction="horizontal" >
            <ResizablePanel minSize={30}>
              <TextEditor />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel minSize={30}>
              <Tldraw />
            </ResizablePanel>
          </ResizablePanelGroup>
        ) : selectedType === "doc" ? (
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel minSize={30}>
              <TextEditor />
            </ResizablePanel>
          </ResizablePanelGroup>
        ) : (
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel minSize={30}>
              <Tldraw />
            </ResizablePanel>
          </ResizablePanelGroup>
        )}
      </div>
  );
}
