import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex flex-col mt-14 min-h-[60dvh]">
      <main className="flex-1 container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32 space-y-12">
        <section>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <CircleCheckIcon className="size-12 text-green-500" />
            <h1 className="text-3xl font-bold">Thank you!</h1>
            <p className="text-muted-foreground max-w-[600px] md:text-xl">
              We appreciate you taking the time to contact us. Your message has
              been successfully submitted.
            </p>
            <Button>
              <Link href={"/"}>Back to home</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}

function CircleCheckIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
