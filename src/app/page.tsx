import TextEditor from "@/components/editor/TextEditor";
import Tldraw from "@/components/editor/Tldraw";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-screen h-screen ">
      <TextEditor/>
    </div>
  );
}
