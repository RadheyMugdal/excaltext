import { Features } from "@/components/landing-page/Features";
import { Footer } from "@/components/landing-page/Footer";
import { Pricing } from "@/components/landing-page/Pricing";
import { Button } from "@/components/ui/button";
import { Brush, PenTool, Settings2, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main>
      <header className=" flex justify-between p-4 items-center  border-b">
        <h1 className=" text-2xl">Excaltext</h1>
        <ul className=" flex gap-6">
          <Link
            href={"#home"}
            className=" cursor-pointer text-foreground/70 hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href={"#features"}
            className=" cursor-pointer text-foreground/70 hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href={"#pricing"}
            className=" cursor-pointer text-foreground/70 hover:text-foreground"
          >
            Pricing
          </Link>
        </ul>
        <Button>Get started</Button>
      </header>
      {/* Main text content */}
      <div className=" flex flex-col gap-4 items-center py-24 justify-center px-32">
        <div className=" flex flex-col gap-8 items-center justify-center text-center ">
          <h1 className=" max-w-4xl text-center text-6xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-primary  to-primary/70">
            Collaborative Drawing & Text Editing Platform
          </h1>
          <p className=" max-w-lg text-foreground/50">
            Create, collaborate, and communicate in real-time with our powerful
            drawing and text editing tools
          </p>
          <div className=" flex gap-4 ">
            <Button className="">Start Free trail</Button>
          </div>
        </div>
        {/* Preview of project */}
        <div className=" px-28  pt-16">
          <div className="w-fit h-fit relative z-20">
            <div className="before:bg-gradient-to-r before:from-primary before:to-primary before:blur-lg before:absolute before:inset-0 before:z-10"></div>
            <Image
              src={"/image.png"}
              alt="Preview"
              width={800}
              height={1000}
              className="max-w-4xl h-[60vh] relative z-20"
            />
          </div>
        </div>
      </div>
      {/* Features section  */}

      <Features />

      {/* Pricing section  */}
      <Pricing />

      {/* footer   */}

      <Footer />
    </main>
  );
};

export default page;
