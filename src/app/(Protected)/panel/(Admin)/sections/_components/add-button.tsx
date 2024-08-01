"use client";
import { Loader2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFormState, useFormStatus } from "react-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AddSection } from "@/app/(Backend)/actions/section/addSection";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import TextEditor from "@/app/(Protected)/_components/TextEditor";

export function AddButton() {
  const [state, dispatch] = useFormState(AddSection, null);
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<string>("");
  const handleContentChange = (reason: any) => {
    setContent(reason);
  };

  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (state?.error) {
      toast.error(`${state?.message}`);
    }
    if (state?.success) {
      toast.success(`${state?.success}`);
      setOpen(false);
      formRef.current?.reset();
    }
    if (state?.info) {
      toast.info(`${state?.info}`);
    }
    if (state?.message) {
      state.message.forEach((i: any) => {
        toast.info(`${i}`);
      });
    }
  }, [state]);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size={"sm"}
          variant={"secondary"}
          className="w-14 h-14 fixed bottom-10 right-12 rounded-full "
        >
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Section</DialogTitle>
          <DialogDescription>
            Add section, Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <form ref={formRef} action={dispatch}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Section
              </Label>
              <Input
                required
                name="section"
                className="col-span-3"
                placeholder="Section Name"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
              <Textarea
                required
                value={content}
                name="description"
                className="col-span-3 hidden"
                placeholder="Description"
                readOnly
              />
              <div className="col-span-3">
                <TextEditor
                  content={content}
                  onChange={(newContent: string) =>
                    handleContentChange(newContent)
                  }
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <DynamicButton title="Add Section" />
          </DialogFooter>
        </form>
      </DialogContent>{" "}
    </Dialog>
  );
}
const DynamicButton = ({ title }: { title: string }) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="animate-spin h-5 w-5 mr-2" /> Loading
        </>
      ) : (
        title
      )}
    </Button>
  );
};
