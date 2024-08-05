"use client";
import { GetCategory } from "@/app/(Backend)/actions/category/getCategory";
import { AddNavLink } from "@/app/(Backend)/actions/navlink/addNavlink";
import { DeleteNavLink } from "@/app/(Backend)/actions/navlink/deleteNavlink";
import { GetNavLink } from "@/app/(Backend)/actions/navlink/getNavlink";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Loader2, Plus, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";

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

  const [category, setCategory] = useState<null | any[]>(null);
  console.log(category);

  const fetchCategory = async () => {
    const data = await GetCategory();
    setCategory(data.categories);
  };

  useEffect(() => {
    fetchCategory();
  }, []);
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    formRef.current?.reset();
    if (state?.success) {
      toast.success(state.message);
    } else if (state?.error) {
      toast.error(state.message);
    } else if (state?.info) {
      toast.info(state.message);
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
            value={".."}
            placeholder="Enter Nav Link"
            name="link"
            required
            className="hidden"
          />
          <Select required name="title">
            <SelectTrigger className="w-[380px] mr-2">
              <SelectValue placeholder="Select NavLinks" />
            </SelectTrigger>
            <SelectContent>
              {category?.map((item): any => {
                return (
                  <SelectItem key={item.id} value={item.id}>
                    {item.title}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
          <DynamicButton />
        </form>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
          {navlinks?.map((item, i) => {
            const title = item.title.replace(/-/g, " ");
            return (
              // <Badge key={i}>{item.title}</Badge>
              <Badge
                key={item.id}
                className="cursor-pointer p-2 pl-4 relative group"
                variant="secondary"
              >
                {title}
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
            );
          })}
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
