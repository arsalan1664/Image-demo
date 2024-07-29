"use client";
import { Separator } from "@/components/ui/separator";

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6 ">
      <div>
        <h3 className="text-lg font-medium">Hero Section</h3>
        <p className="text-sm text-muted-foreground">
          Enter title and desc to change hero section
        </p>
      </div>
      <Separator />
      <InputWithLabel />
    </div>
  );
}

///////////////////////////
/////////////////////////

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import {
  GetHeroSection,
  HeroSection,
} from "@/app/(Backend)/actions/herosection/heroSection";

function InputWithLabel() {
  const [state, dispatch] = useFormState(HeroSection, null);
  const formRef = useRef<HTMLFormElement>(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const fetchData = async () => {
    const res = await GetHeroSection();
    if (res.success) {
      setTitle(res.success.title);
      setDesc(res.success.desc);
    }
  };

  useEffect(() => {
    fetchData();
    if (state?.success) {
      formRef.current?.reset();
      toast.success(`${state.success}`);
    } else if (state?.error) {
      toast.error(state?.error);
    }
  }, [state]);

  return (
    <form ref={formRef} className="space-y-4" action={dispatch}>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="title">Title</Label>
        <Input type="text" name="title" placeholder="Enter title" required />
        <p className="text-sm text-foreground/70 my-1">
          Current Title: {title}
        </p>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="desc">Desc</Label>
        <Input type="desc" name="desc" placeholder="Enter desc" required />
        <p className="text-sm text-foreground/70 my-1">Current Desc: {desc}</p>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <DynamicButton title={"Update"} />
      </div>
    </form>
  );
}

const DynamicButton = ({ title }: { title: string }) => {
  const { pending } = useFormStatus();
  return (
    <Button className="w-full" type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="animate-spin h-5 w-5 mr-2" /> Loading...
        </>
      ) : (
        title
      )}
    </Button>
  );
};
