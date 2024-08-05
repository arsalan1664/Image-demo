"use client";

import AddDarkLogo from "@/app/(Backend)/actions/websitename/addDarkLogo";
import AddLogo from "@/app/(Backend)/actions/websitename/addLogo";
import AddName from "@/app/(Backend)/actions/websitename/addName";
import GetDarkLogo from "@/app/(Backend)/actions/websitename/getDarkLogo";
import GetLogo from "@/app/(Backend)/actions/websitename/getLogo";
import GetName from "@/app/(Backend)/actions/websitename/getName";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Loader2, Plus, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useFormStatus, useFormState } from "react-dom";
import { toast } from "sonner";

export default function WebsiteName() {
  const [nameState, nameDispatch] = useFormState(AddName, null);
  const [logoState, logoDispatch] = useFormState(AddLogo, null);
  const [darkLogoState, darkLogoDispatch] = useFormState(AddDarkLogo, null);
  const [websiteName, setWebsiteName] = useState("");
  const [websiteLogo, setWebsiteLogo] = useState("");
  const [websiteDarkLogo, setWebsiteDarkLogo] = useState("");
  const nameFormReset = useRef<HTMLFormElement>(null);
  const logoFormReset = useRef<HTMLFormElement>(null);
  const darkLogoFormReset = useRef<HTMLFormElement>(null);

  const fetchName = async () => {
    const res = await GetName();
    if (res?.error) return;
    setWebsiteName(res?.success?.title as string);
  };

  const fetchLogo = async () => {
    const res = await GetLogo();
    if (res?.error) return;
    setWebsiteLogo(res?.success?.logosrc.split("/")[3] as string);
  };

  const fetchDarkLogo = async () => {
    const res = await GetDarkLogo();
    if (res?.error) return;
    setWebsiteDarkLogo(res?.success?.logosrc.split("/")[3] as string);
  };

  const fetchData = async () => {
    try {
      await Promise.all([fetchName(), fetchLogo(), fetchDarkLogo()]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSuccess = (state: any, resetRef: any, fetchFunc: any) => {
    if (state?.success) {
      resetRef.current?.reset();
      fetchFunc();
      toast.success(state?.success);
    }
    if (state?.error) {
      toast.error(state?.error);
    }
  };

  useEffect(() => {
    handleSuccess(nameState, nameFormReset, fetchName);
  }, [nameState]);

  useEffect(() => {
    handleSuccess(logoState, logoFormReset, fetchLogo);
  }, [logoState]);

  useEffect(() => {
    handleSuccess(darkLogoState, darkLogoFormReset, fetchDarkLogo);
  }, [darkLogoState]);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Website Name </h3>
        <p className="text-sm text-muted-foreground">
          Customize the name and logo of the website.
        </p>
      </div>
      <Separator />
      <div className="flex flex-col items-start gap-8">
        <form ref={nameFormReset} action={nameDispatch} className="flex gap-2">
          <Input
            placeholder="Enter Website Name"
            name="name"
            required
            className="w-[380px] mr-2"
          />
          <DynamicButton />
        </form>
        <div className="">
          <h4 className="text-foreground/80 text-sm">
            Your website name is{" "}
            <span className="font-extrabold">{websiteName}</span>{" "}
          </h4>
        </div>
      </div>
      <div className="flex flex-col items-start gap-8">
        <form ref={logoFormReset} action={logoDispatch} className="flex gap-2">
          <Input name="logo" type="file" required className="w-[380px] mr-2" />
          <DynamicButton />
        </form>
        <div className="flex gap-2 items-center">
          <h4 className="text-foreground/80 text-sm">
            Your Logo for Light Mode{" "}
          </h4>
          <Image
            width={50}
            height={50}
            src={process.env.NEXT_PUBLIC_URL + `/uploads/logo/${websiteLogo}`}
            alt="logo"
          />
        </div>
      </div>
      <div className="flex flex-col items-start gap-8">
        <form
          ref={logoFormReset}
          action={darkLogoDispatch}
          className="flex gap-2"
        >
          <Input name="logo" type="file" required className="w-[380px] mr-2" />
          <DynamicButton />
        </form>
        <div className="flex gap-2 items-center">
          <h4 className="text-foreground/80 text-sm">
            Your Logo For Dark Mode{" "}
          </h4>
          <Image
            width={50}
            height={50}
            src={
              process.env.NEXT_PUBLIC_URL + `/uploads/logo/${websiteDarkLogo}`
            }
            alt="logo"
          />
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
