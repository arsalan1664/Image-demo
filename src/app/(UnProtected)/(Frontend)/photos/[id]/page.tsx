import React from "react";
import { Button } from "@/components/ui/button";
import { Copy, Download, Facebook, Instagram, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { db } from "@/lib/db";
import BackButton from "./BackButton";
import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";
import {
  FacebookShareButton,
  InstapaperShareButton,
  TwitterShareButton,
} from "react-share";
import SocialButtons from "./SocialButtons";

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
  return (
    <div className="min-h-screen my-16 items-start max-w-6xl px-4 mx-auto py-6">
      <BackButton />
      <div className=" grid md:grid-cols-2 gap-6 lg:gap-12 ">
        <div className="grid gap-4 md:gap-10 items-start">
          <Image
            alt="Images"
            className=" object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
            height={300}
            src={imageUrl}
            width={500}
          />
        </div>
        <div className="grid gap-4 md:gap-10 items-start ">
          <div className="grid gap-2">
            <h1 className="font-bold text-3xl lg:text-4xl">{data?.title}</h1>
            <p className="text-gray-500 dark:text-gray-400 mb-4 md:mb-8">
              {data?.description}
            </p>

            <div className="grid gap-4 mb-6">
              <div className=" h-auto max-w-[36rem] space-y-4">
                <h1 className="font-semibold text-xs">Tags</h1>
                <div className="grid grid-cols-3 sm:grid-cols-5  items-center gap-2 w-full ">
                  {tags?.map((item, i) => (
                    <h4 key={i} className="bg-secondary p-2 rounded-xl text-xs">
                      {item}
                    </h4>
                  ))}
                </div>
              </div>
            </div>
            <Button size="lg" className="w-full">
              <Download className="mr-4 " /> Download
            </Button>
            <SocialButtons />
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
