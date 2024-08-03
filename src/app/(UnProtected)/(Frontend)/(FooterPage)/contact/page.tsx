import React from "react";
import { Form } from "@/app/(Protected)/panel/(Admin)/tags/_components/tagForm";
export default function Component() {
  return (
    <div className="w-full max-w-3xl mx-auto py-12 md:py-32 px-4 md:px-6">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Get in Touch
        </h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          Have a question or want to work together? Fill out the form below and
          we will get back to you as soon as possible.
        </p>
      </div>
      <div className="mt-10 md:mt-16">{/* <Form /> */}</div>
    </div>
  );
}
