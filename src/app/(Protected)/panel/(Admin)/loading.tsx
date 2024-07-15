import React from "react";
import Header from "../../_components/Header";
import { Skeleton } from "@/components/ui/skeleton";

function Loading() {
  return (
    <>
      <Header title={""} />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-5 md:p-6 mt-5">
        <Skeleton className="w-[50%] h-8" />
        <Skeleton className="w-full h-8" />
        <Skeleton className="w-full h-8" />
        <Skeleton className="w-full h-8" />
        <Skeleton className="w-full h-8" />
        <Skeleton className="w-full h-8" />
      </main>
    </>
  );
}

export default Loading;
