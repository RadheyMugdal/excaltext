import GithubLogin from "@/components/Auth/GithubLogin";
import GoogleLogin from "@/components/Auth/GoggleLogin";
import { Briefcase } from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <main className=" w-screen h-screen flex items-center justify-center ">
      <div className=" bg-secondary/50 w-full max-w-md    border  p-8 py-12  rounded-xl flex flex-col gap-8  ">
        <div className=" flex flex-col items-center justify-center">
          <Briefcase />
          <h1 className=" text-xl font-bold text-center  ">
            Signin into excaltext
          </h1>
          <p className=" text-md text-center text-foreground/50">
            Welcome back! Sign in to continue.
          </p>
        </div>
        <div className=" flex flex-1  gap-4">
          <GoogleLogin />
          <GithubLogin />
        </div>
      </div>
    </main>
  );
}
