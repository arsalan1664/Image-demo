"use client";
import ContactForm from "@/app/(Backend)/actions/contact/contactForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";

export default function Form() {
  const [state, dispatch] = useFormState(ContactForm, null);
  //   useEffect(() => {
  //     if (state.success) {
  //       toast.success(state.succes);

  //     }
  //   }, [state]);
  return (
    <form action={dispatch} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Enter your message"
          className="min-h-[150px]"
        />
      </div>
      <DymanicButton />
    </form>
  );
}

function DymanicButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit" className="w-full">
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Loading...
        </>
      ) : (
        "Submit"
      )}
    </Button>
  );
}
