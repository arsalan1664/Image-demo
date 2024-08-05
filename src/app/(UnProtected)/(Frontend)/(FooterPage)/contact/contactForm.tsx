"use client";
import ContactForm from "@/app/(Backend)/actions/contact/contactForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";

export default function Form() {
  const [state, dispatch] = useFormState(ContactForm, null);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
      router.push("/thankyou");
    }
    if (state?.error) {
      toast.error(state?.error);
    }
  }, [state]);
  return (
    <form ref={formRef} action={dispatch} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input name="name" required placeholder="Enter your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            required
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="name">Phone</Label>
          <Input name="phone" required placeholder="Enter your phone number" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Subject</Label>
          <Input name="subject" required placeholder="Subject" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          name="message"
          required
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
