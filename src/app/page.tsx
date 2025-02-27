import Tldraw from "@/components/editor/canvas/Tldraw";
import Header from "@/components/editor/Header";
import TextEditor from "@/components/editor/TextEditor/TextEditor";
import Image from "next/image";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
export default function Home() {
  return (
    <div className=" w-screen h-screen flex flex-col overflow-hidden  ">
      {/* header  */}
      <Header />
      {/* main content  */}
      <div className=" flex-1 ">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel minSize={30}>
            <TextEditor />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel minSize={30}>
            <Tldraw />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
