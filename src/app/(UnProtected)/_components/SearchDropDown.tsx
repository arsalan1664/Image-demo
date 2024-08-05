"use client";
import React, { useEffect, useState } from "react";
import {
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Layers3, X } from "lucide-react";
import { GetCategory } from "@/app/(Backend)/actions/category/getCategory";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

function SearchDropDown({
  query,
  focus,
  setFocus,
}: {
  query: string | null;
  focus: boolean;
  setFocus: any;
}) {
  const router = useRouter();
  const [categories, setCategories] = useState<any[] | null>(null);

  const handleAction = async () => {
    try {
      const { categories } = await GetCategory();
      setCategories(categories);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleAction();
  }, []);
  return (
    <CommandList
      className={
        focus
          ? "absolute  top-12  rounded-lg w-[90%] md:w-[93%] z-40  dark:bg-secondary/30 backdrop-blur-xl text-left"
          : "hidden "
      }
    >
      <CommandEmpty className="text-center p-2 hidden">
        No results found.
      </CommandEmpty>

      <CommandGroup
        heading={
          <div className="flex items-center justify-between px-3 ">
            Categories
            <Button
              onClick={() => setFocus(false)}
              className="dark:bg-red-700/50 bg-red-300/70 text-foreground"
              variant={"ghost"}
              size={"xs"}
            >
              <X className="h-3 w-3 " />
            </Button>
          </div>
        }
      >
        {categories?.map((item, i) => (
          <CommandItem
            key={item.id}
            className={i > 5 ? "hidden" : ""}
            onSelect={() => {
              console.log("first");
              router.push(`/c/${item.id}`);
            }}
          >
            <Layers3 className="mr-2 h-4 w-4" />
            <span>{item.title}</span>
          </CommandItem>
        ))}
      </CommandGroup>
    </CommandList>
  );
}

export default SearchDropDown;
