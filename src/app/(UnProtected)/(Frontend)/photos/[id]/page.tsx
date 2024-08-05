import React from "react";
import { Button } from "@/components/ui/button";
import { Download, DownloadIcon, TagIcon } from "lucide-react";
import { db } from "@/lib/db";
import BackButton from "./BackButton";
import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";
import { SocialButtons, SocialButtons2 } from "./SocialButtons";
import InnerHtml from "@/lib/innerHtml";
import Component from "./component";

// export async function generateStaticParams() {
//   const Posts = await db.posts.findMany();
//   return Posts?.map((item: any) => ({
//     id: item.id,
//   }));
// }

export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  const post = await db.posts.findUnique({
    where: {
      id,
    },
  });

  return {
    title: post?.title,
    description: post?.description,
  };
}

async function Page({ params }: { params: any }) {
  const data = await db.posts.findUnique({
    where: {
      id: params.id,
    },
    include: {
      postTags: {
        include: {
          tag: true,
        },
      },
    },
  });
  const tags: string[] = [];
  const imageUrl = data?.imageUrl as string;
  data?.postTags.forEach((item: any) => {
    const title = item.tag?.title as string;
    tags.push(title);
  });
  const handleClick = async () => {
    try {
      const fileUrl = `${imageUrl}`;

      // Fetch file content from the server
      const response = await fetch(fileUrl);
      if (!response.ok) {
        throw new Error("Failed to download file");
      }

      // Read file content as blob
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob); // Use blob URL
      link.setAttribute("download", imageUrl);
      link.click();
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };
  return (
    <div className="min-h-screen my-16 items-start max-w-6xl px-4 mx-auto py-6">
      <BackButton />
      <div className=" grid md:grid-cols-2 gap-6 lg:gap-12 ">
        <div className="grid gap-4 md:gap-10 items-start">
          {data?.filetype === "Video" ? (
            <video
              controls
              className=" object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
              height={300}
              src={process.env.NEXT_PUBLIC_URL + imageUrl}
              width={500}
            />
          ) : (
            <Image
              alt="Images"
              className=" object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
              height={300}
              src={process.env.NEXT_PUBLIC_URL + imageUrl}
              width={500}
            />
          )}
        </div>
        <div className="grid gap-4 md:gap-10 items-start ">
          <div className="grid gap-2">
            <h1 className="font-bold text-3xl lg:text-4xl">{data?.title}</h1>
            <div className="text-gray-500 dark:text-gray-400 mb-4 md:mb-8">
              <InnerHtml rawHTML={data?.description} />
            </div>

            <div className="grid gap-4 mb-6">
              <div className=" h-auto max-w-[36rem] space-y-4">
                <div className="flex flex-wrap gap-2">
                  {tags.map((item, i) => (
                    <div
                      key={i}
                      className="bg-card inline-flex items-center gap-2 rounded-full dark:bg-muted px-3 py-1 text-sm font-medium"
                    >
                      <TagIcon className="w-4 h-4" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Component imageUrl={imageUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

type tagType = {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  categoriesId: string | null;
  postTags: postTags[];
  createdAt: Date;
  updatedAt: Date;
};

type postTags = {
  id: string;
  title: string;
};
