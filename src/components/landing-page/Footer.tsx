import { Twitter, Github, Linkedin } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="   border-t-foreground/10 border-2 ">
      <div className="flex flex-col  gap-11  md:flex-row  justify-between py-10 px-10 md:px-20  ">
        <div className=" flex flex-col justify-between">
          <div>
            <h3 className=" text-xl font-bold">Excaltext</h3>
            <p>Building the future, one pixel at a time.</p>
          </div>
          <p className=" text-xs text-foreground/50">
            © 2024 Company. All rights reserved.
          </p>
        </div>
        <div className=" flex flex-col  gap-6">
          <h3 className=" text-lg">Socials</h3>
          <div className=" flex flex-col gap-2">
            <p className="text-sm flex  items-center gap-3 text-foreground/70 hover:text-foreground cursor-pointer">
              <Twitter className=" size-4" />
              Twitter
            </p>
            <p className="text-sm flex  items-center gap-3 text-foreground/70 hover:text-foreground cursor-pointer">
              <Github className=" size-4" />
              Github
            </p>
            <p className="text-sm flex  items-center gap-3 text-foreground/70 hover:text-foreground cursor-pointer">
              <Linkedin className=" size-4" />
              Linkedin
            </p>
          </div>
        </div>
        <div className=" flex flex-col gap-6">
          <h3 className=" text-lg">Links</h3>
          <div className=" flex flex-col gap-2">
            <p className="text-sm flex  items-center gap-3 text-foreground/70 hover:text-foreground cursor-pointer">
              Demo
            </p>
            <p className="text-sm flex  items-center gap-3 text-foreground/70 hover:text-foreground cursor-pointer">
              Features
            </p>
            <p className="text-sm flex  items-center gap-3 text-foreground/70 hover:text-foreground cursor-pointer">
              Pricing
            </p>
          </div>
        </div>
        <div className=" flex flex-col gap-6">
          <h3 className=" text-lg">Legal</h3>
          <div className=" flex flex-col gap-2">
            <p className="text-sm flex  items-center gap-3 text-foreground/70 hover:text-foreground cursor-pointer">
              Privacy Policy
            </p>
            <p className="text-sm flex  items-center gap-3 text-foreground/70 hover:text-foreground cursor-pointer">
              Terms
            </p>
            <p className="text-sm flex  items-center gap-3 text-foreground/70 hover:text-foreground cursor-pointer">
              Cookie policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
