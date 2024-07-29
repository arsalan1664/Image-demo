import Link from "next/link";
import Animated_Search from "./Animated_Search";
import { Rocket } from "lucide-react";
import GetName from "@/app/(Backend)/actions/websitename/getName";
import { GetHeroSection } from "@/app/(Backend)/actions/herosection/heroSection";

export default async function Component() {
  const res = await GetHeroSection();

  const title = res.success?.title;
  const desc = res.success?.desc;

  return (
    <section className="w-full py-6 md:py-12  h-[550px]">
      <div className="container px-4 md:px-6 h-full">
        <div className="flex flex-col items-center justify-center space-y-2 text-center h-full gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {title}
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              {desc}
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 ">
            <Animated_Search />
          </div>

          <div className="flex gap-4 "></div>
        </div>
      </div>
    </section>
  );
}
