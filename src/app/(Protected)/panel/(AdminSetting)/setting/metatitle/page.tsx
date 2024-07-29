"use client";
import { Separator } from "@/components/ui/separator";

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6 ">
      <div>
        <h3 className="text-lg font-medium">Homepage Meta-Title & Desc</h3>
        <p className="text-sm text-muted-foreground">
          Enter title and desc to change meta title and desc
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
  GetHomePage,
  MetaTitle,
} from "@/app/(Backend)/actions/metatitle/metaTitle";

function InputWithLabel() {
  const [state, dispatch] = useFormState(MetaTitle, null);
  const formRef = useRef<HTMLFormElement>(null);
  const [metatitle, setMetatitle] = useState("");
  const [metadesc, setMetadesc] = useState("");

  const fetchData = async () => {
    const res = await GetHomePage();
    if (res.success) {
      setMetatitle(res.success.metaTitle);
      setMetadesc(res.success.metaDesc);
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
        <Label htmlFor="metaTitle" className="my-1">
          Meta-Title
        </Label>

        <Input
          type="metaTitle"
          name="metaTitle"
          id="metaTitle"
          placeholder="Enter Meta Title"
          required
        />
        <p className="text-sm text-foreground/70 my-1">
          Current Meta Title: {metatitle}
        </p>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="metaDesc" className="my-1">
          Meta-Desc
        </Label>
        <Input
          type="metaDesc"
          name="metaDesc"
          id="metaDesc"
          placeholder="Enter Meta Description"
          required
        />
        <p className="text-sm text-foreground/70 my-1">
          Current Meta Desc: {metadesc}
        </p>
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
