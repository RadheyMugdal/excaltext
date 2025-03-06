import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";

export function Pricing() {
  return (
    <section className="py-20 px-4" id="pricing">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-16">
          Pricing
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className=" bg-secondary/50 ">
            <CardHeader>
              <CardTitle>Free</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className=" text-sm text-foreground/70  flex flex-col gap-4">
                <li className=" flex gap-3">
                  <CircleCheck className=" size-5   text-green-500" />
                  Upto 10 files
                </li>
                <li className=" flex gap-3">
                  <CircleCheck className=" size-5   text-green-500" />
                  Upto 2 workspaces
                </li>
                <li className=" flex gap-3">
                  <CircleCheck className=" size-5   text-green-500" />
                  Upto 1 user
                </li>
                <li className=" flex gap-3">
                  <CircleCheck className=" size-5   text-green-500" />
                  Basic support
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full  border-foreground/40 border-[1px]"
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>
          <Card className=" bg-secondary/50 relative overflow-hidden border-primary">
            <div className="absolute top-0 right-0 px-4 py-1 bg-primary text-primary-foreground text-sm">
              Popular
            </div>
            <CardHeader>
              <CardTitle>Pro monthly</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className=" text-sm text-foreground/70  flex flex-col gap-4">
                <li className=" flex gap-3">
                  <CircleCheck className=" size-5   text-green-500" />
                  Unlimited files
                </li>
                <li className=" flex gap-3">
                  <CircleCheck className=" size-5   text-green-500" />
                  Unlimited workspaces
                </li>
                <li className=" flex gap-3">
                  <CircleCheck className=" size-5   text-green-500" />
                  Upto 5 users
                </li>
                <li className=" flex gap-3">
                  <CircleCheck className=" size-5   text-green-500" />
                  Dedicated support
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Get Started</Button>
            </CardFooter>
          </Card>
          <Card className=" bg-secondary/50">
            <CardHeader>
              <CardTitle>Pro yearly</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className=" text-sm text-foreground/70  flex flex-col gap-4">
                <li className=" flex gap-3">
                  <CircleCheck className=" size-5   text-green-500" />
                  Dedicated files
                </li>
                <li className=" flex gap-3">
                  <CircleCheck className=" size-5   text-green-500" />
                  Unlimited workspaces
                </li>
                <li className=" flex gap-3">
                  <CircleCheck className=" size-5   text-green-500" />
                  Upto 10 user
                </li>
                <li className=" flex gap-3">
                  <CircleCheck className=" size-5   text-green-500" />
                  Dedicated support
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full border-foreground/40 border-[1px]"
              >
                Contact Sales
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
