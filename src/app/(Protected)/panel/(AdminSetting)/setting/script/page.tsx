"use client";
import { Separator } from "@/components/ui/separator";

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6 ">
      <div>
        <h3 className="text-lg font-medium">Script</h3>
        <p className="text-sm text-muted-foreground">Enter the Script</p>
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
import { Loader2, X } from "lucide-react";
import {
  GetHomePage,
  MetaTitle,
} from "@/app/(Backend)/actions/metatitle/metaTitle";
import { Textarea } from "@/components/ui/textarea";
import {
  AddScript,
  DeleteScript,
  GetScript,
} from "@/app/(Backend)/actions/script/ScriptAction";
import { Badge } from "@/components/ui/badge";

function InputWithLabel() {
  const [state, dispatch] = useFormState(AddScript, null);
  const [pendingdelete, setPendingdelete] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [response, setResponse] = useState<any>([]);

  const handleDelete = async (id: any) => {
    setPendingdelete(true);
    const res = await DeleteScript(id);
    setPendingdelete(false);
    if (res?.success) {
      toast.success(res.message);
      fetchData();
    } else if (res?.error) {
      toast.success(res.message);
    }
  };

  const fetchData = async () => {
    const res = await GetScript();
    if (res.success) {
      setResponse(res?.success);
    }
  };
  useEffect(() => {
    fetchData();
    if (state?.success) {
      formRef.current?.reset();
      toast.success(`${state.message}`);
    } else if (state?.error) {
      toast.error(state?.message);
    }
  }, [state]);

  return (
    <>
      <form ref={formRef} className="space-y-4" action={dispatch}>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="script-title" className="my-1">
            Script Title
          </Label>
          <Input
            name="script-title"
            placeholder="Enter Script title"
            required
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="script" className="my-1">
            Script
          </Label>
          <Textarea
            className="h-32"
            name="script"
            placeholder="Enter Script"
            required
          />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <DynamicButton title={"Update"} />
        </div>
      </form>
      <div className="mt-4 grid grid-cols-4 md:grid-cols-6 gap-2">
        {response?.map((item: any) => (
          <Badge
            key={item.id}
            className="cursor-pointer p-2 pl-4 relative group "
            variant="secondary"
          >
            {item.title}
            <>
              <input className="hidden" name="id" value={item.id} readOnly />
              <Button
                onClick={() => handleDelete(item.id)}
                variant={"destructive"}
                className={
                  pendingdelete
                    ? "h-4 p-0 rounded-full  absolute -top-3 right-0 "
                    : "h-4 p-0 rounded-full  absolute -top-3 right-0  hidden group-hover:block"
                }
                disabled={pendingdelete}
              >
                {pendingdelete ? (
                  <>
                    <Loader2 className="animate-spin h-2 w-2 m-1" />
                  </>
                ) : (
                  <X className="h-3 w-4" />
                )}
              </Button>
            </>
          </Badge>
        ))}
      </div>
    </>
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
