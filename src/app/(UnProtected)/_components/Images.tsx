"use client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import InnerHtmlClient from "@/lib/innerHtmlClient";
import InnerHtmlClientWrapper from "@/lib/InnerHtmlClientDynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";

type typeValue = "all" | "image" | "video" | "gifs" | "phrases";

function Images({ images, tags = [] }: { images: any; tags: any[] }) {
  const [value, setValue] = useState<typeValue | string>("all");
  const router = useRouter();
  console.log(images);
  const filteredContent = useMemo(() => {
    if (value === "all") {
      return images.posts;
    } else if (value === "image") {
      return images.posts.filter((post: any) => post.filetype === "Image");
    } else if (value === "video") {
      return images.posts.filter((post: any) => post.filetype === "Video");
    } else if (value === "gifs") {
      return images.posts.filter((post: any) => post.filetype === "Gif");
    } else if (value === "phrases") {
      return images.posts.filter((post: any) => post.filetype === "Phrases");
    }
    return images.posts;
  }, [images, value]);

  return (
    <>
      <div className="mx-8 mt-6 md:mt-10 py-3  bg-card dark:bg-card pl-[-20px] sm:pl-4 md:pl-6  rounded-lg shadow-sm">
        <h2 className="text-lg md:text:2xl font-bold mb-4">Filter by type</h2>

        <div className="flex flex-wrap gap-2 ">
          <ToggleGroup
            variant="outline"
            type="single"
            defaultValue="all"
            value={value}
            onValueChange={setValue}
          >
            <ToggleGroupItem value="all" aria-label="Toggle all">
              All
            </ToggleGroupItem>
            <ToggleGroupItem value="image" aria-label="Toggle image">
              Image
            </ToggleGroupItem>
            <ToggleGroupItem value="video" aria-label="Toggle video">
              Videos
            </ToggleGroupItem>
            <ToggleGroupItem value="gifs" aria-label="Toggle gifs">
              Gifs
            </ToggleGroupItem>
            <ToggleGroupItem value="phrases" aria-label="Toggle phrases">
              Phrases
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
      <div className="p-5 md:p-10 lg:max-w-screen-2xl mx-auto">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-5  space-y-5 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
          {filteredContent.map((item: any) => (
            <div
              key={item.id}
              onClick={() => router.push(`/photos/${item.id}`)}
              className=" overflow-hidden   bg-background cursor-pointer rounded-xl relative group"
            >
              <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/90 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                <div>
                  <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10  transition duration-300 ease-in-out">
                    <div className="font-bold">{item.title}</div>

                    <div className="opacity-60 text-sm ">
                      <InnerHtmlClientWrapper rawHTML={item.description} />
                    </div>
                  </div>
                </div>
              </div>
              {item.filetype === "Video" ? (
                <video width="320" height="240" >
                  <source
                    src={process.env.NEXT_PUBLIC_URL + item.imageUrl}
                    width={80}
                    height={40}
                  />
                  <track
                    src="/path/to/captions.vtt"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                  />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  width={500}
                  height={500}
                  alt="Image"
                  className="object-cover w-full  group-hover:scale-110 group-hover:brightness-50 transition duration-300 ease-in-out"
                  src={process.env.NEXT_PUBLIC_URL + item.imageUrl}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Images;
