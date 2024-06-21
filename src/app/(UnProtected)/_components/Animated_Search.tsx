"use client";

import {
  Command,
  CommandInput,
} from "@/components/ui/command";
import {
  ArrowBigRight,
  Loader2,
} from "lucide-react";
import React, { useState } from "react";
import SearchDropDown from "./SearchDropDown";
import { useDebounce } from "use-debounce";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function Animated_Search() {
  const [value, setValue] = useState("");
  const [query] = useDebounce(value, 500);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = () => {
    setLoading(true);
    router.push(`/search?query=${query}`);
  };
  return (
    <div className="my-2">
      <div className="grid gap-8 items-start justify-center">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative px-4 bg-zinc-950 rounded-full leading-none flex items-center md:min-w-96">
            <Command className="bg-zinc-950 text-white/40 ">
              <CommandInput
                inputMode="search"
                value={value}
                onValueChange={(search: string) => setValue(search)}
                placeholder="Type a command or search..."
              />
              <SearchDropDown query={query} />
            </Command>
            {!query && value && (
              <Loader2 className="animate-spin text-white/40  ml-auto" />
            )}
            {isLoading ? (
              <Loader2 className="animate-spin text-white/40  ml-auto" />
            ) : (
              <Button onClick={handleSubmit} size={"icon"} variant={"ghost"}>
                <ArrowBigRight className=" text-white/40 " />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animated_Search;
