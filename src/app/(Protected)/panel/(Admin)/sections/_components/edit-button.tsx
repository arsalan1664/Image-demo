"use client";
import { Button } from "@/components/ui/button";
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
import { useFormState } from "react-dom";
import { EditSection } from "@/app/(Backend)/actions/section/editSection";
import { useFormStatus } from "react-dom";
import { Loader2, Pencil } from "lucide-react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import TextEditor from "@/app/(Protected)/_components/TextEditor";

export function EditButton({
  id,
  section,
  description,
}: {
  id: string;
  section: any;
  description: any;
}) {
  const [state, dispatch] = useFormState(EditSection, null);
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<any>(`<p>${description}</p>`);

  const handleContentChange = (reason: any) => {
    setContent(reason);
  };
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (state?.error) {
      toast.error(`${state?.error}`);
    }
    if (state?.success) {
      setOpen(false);
      toast.success(`${state?.success}`);
      formRef.current?.reset();
    }
    if (state?.info) {
      toast.info(`${state?.info}`);
    }
  }, [state]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="w-full">
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <Pencil size={16} className="mr-2" /> Edit
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Section</DialogTitle>
          <DialogDescription>
            Make changes to your section here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <form ref={formRef} action={dispatch}>
          <div className="grid gap-4 py-4">
            <div className="hidden ">
              <Label htmlFor="id" className="text-right">
                Id
              </Label>
              <Input
                name="id"
                defaultValue={id}
                className="col-span-3"
                placeholder="Section Name"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="section" className="text-right">
                Section
              </Label>
              <Input
                required
                name="section"
                defaultValue={section}
                className="col-span-3"
                placeholder="Section Name"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                required
                name="description"
                value={content}
                className="col-span-3 hidden"
                placeholder="Section Name"
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
            <DynamicButton title="Edit Section" />
          </DialogFooter>
        </form>
      </DialogContent>
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
