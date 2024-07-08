"use client";
import {
  DBcheck,
  ServerActions,
  ServerApiActions,
} from "@/app/(Backend)/actions/healthcheck/healthCheck";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Check, Loader2, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type State = "loading" | "success" | "failure";

export default function Page() {
  const [dbstate, setDbstate] = useState<State>("loading");
  const [actionstate, setActionstate] = useState<State>("loading");
  const [apistate, setApistate] = useState<State>("loading");
  const [state, setState] = useState<State>("loading");
  const router = useRouter();

  const fetchDBCheck = async () => {
    const res = await DBcheck();
    if (res.succcess) {
      setDbstate("success");
    } else {
      setDbstate("failure");
    }
  };

  const fetchAction = async () => {
    const res = await ServerApiActions();
    if (res?.succcess) {
      setActionstate("success");
    } else {
      setActionstate("failure");
    }
  };

  const fetchApi = async () => {
    const res = await fetch("/api/healthcheck");
    if (res.ok) {
      setApistate("success");
    } else {
      setApistate("failure");
    }
  };
  useEffect(() => {
    fetchAction();
    fetchDBCheck();
    fetchApi();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen ">
      <Card className="w-[400px] bg-muted">
        <CardHeader>
          <h1 className="text-2xl">Health Check</h1>
        </CardHeader>
        <CardContent className="space-y-2 ">
          <Component title="Server Actions & Api" state={actionstate} />
          <Component title="Database" state={dbstate} />
          <Component title="Api" state={apistate} />
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => router.back()}>
            Back
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

function Component({ state, title }: { title: string; state: State }) {
  return (
    <div className="flex items-center  justify-between w-full">
      <h3> {title}</h3>
      {state === "loading" ? (
        <Loader2 className="animate-spin" size={20} />
      ) : state === "success" ? (
        <Check className="text-green-400" size={20} />
      ) : (
        <X className="text-red-400" size={20} />
      )}
    </div>
  );
}
