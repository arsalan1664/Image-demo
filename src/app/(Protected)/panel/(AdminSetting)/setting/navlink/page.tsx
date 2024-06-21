"use client";
import { AddNavLink } from "@/app/(Backend)/actions/navlink/addNavlink";
import { DeleteNavLink } from "@/app/(Backend)/actions/navlink/deleteNavlink";
import { GetNavLink } from "@/app/(Backend)/actions/navlink/getNavlink";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Loader2, Plus, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

type TNav =
  | {
      id: number;
      title: string;
      link: string;
    }[]
  | undefined;

export default function NavlinkPage() {
  const [navlinks, setNavlinks] = useState<null | TNav>(null);
  const [state, dispatch] = useFormState(AddNavLink, null);
  const [deleteState, deleteDispatch] = useFormState(DeleteNavLink, null);
  const fetchData = async () => {
    const data = await GetNavLink();
    setNavlinks(data);
  };
  useEffect(() => {
    fetchData();
  }, [state, deleteState]);

  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (state?.message === "success") {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Navlink</h3>
        <p className="text-sm text-muted-foreground">
          Customize the navlink of the website.
        </p>
      </div>
      <Separator />
      <div className="flex flex-col items-start gap-8">
        <form ref={formRef} action={dispatch} className="flex gap-2">
          <Input
            defaultValue={state?.fieldValues.title}
            placeholder="Enter Nav title"
            name="title"
            required
          />
          <Input
            defaultValue={state?.fieldValues.description}
            placeholder="Enter Nav Link"
            name="link"
            required
          />
          <DynamicButton />
        </form>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
          {navlinks?.map((item, i) => (
            // <Badge key={i}>{item.title}</Badge>
            <Badge
              key={item.id}
              className="cursor-pointer p-2 pl-4 relative group"
              variant="secondary"
            >
              {item.title}
              <form action={deleteDispatch}>
                <input
                  className="hidden"
                  name="id"
                  id="id"
                  value={item.id}
                  readOnly
                />
                <MyButton />
              </form>
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

function DynamicButton() {
  const { pending } = useFormStatus();
  return (
    <>
      <Button className="" type="submit" disabled={pending}>
        {pending ? (
          <>
            <Loader2 className="animate-spin h-5 w-5 mr-2" /> Loading...
          </>
        ) : (
          <>
            <Plus className="h-4 w-4 mr-2" />
            Add
          </>
        )}
      </Button>
    </>
  );
}

const MyButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      variant={"destructive"}
      className={
        pending
          ? "h-4 p-0 rounded-full  absolute -top-3 right-0 "
          : "h-4 p-0 rounded-full  absolute -top-3 right-0  hidden group-hover:block"
      }
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader2 className="animate-spin h-2 w-2 m-1" />
        </>
      ) : (
        <X className="h-3 w-4" />
      )}
    </Button>
  );
};