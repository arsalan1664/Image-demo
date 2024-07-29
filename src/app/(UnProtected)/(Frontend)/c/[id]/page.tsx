import { db } from "@/lib/db";
import Images from "../../../_components/Images";
import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  const categories = await db.categories.findUnique({
    where: {
      id,
    },
  });

  return {
    title: categories?.metaTitle,
    description: categories?.metaDescription,
  };
}

export default async function Category({ params }: { params: { id: string } }) {
  const id = params.id;

  const categories = await db.categories.findUnique({
    where: {
      id,
    },
    include: {
      posts: true,
    },
  });
  const imageUrl = categories?.imageUrl as string;

  // let tagssArray: any[] = [];
  // categories?.posts.map((i: any) => {
  //   i.postTags.map((j: any) => {
  //     tagssArray.push(j.tagId);
  //   });
  // });

  // const filteredTags = await db.tags.findMany({
  //   where: {
  //     id: {
  //       in: tagssArray,
  //     },
  //   },
  // });

  return (
    <div className="">
      <div className="relative">
        <Image
          alt="3D Renders"
          className="w-full"
          height="500"
          src={process.env.NEXT_PUBLIC_URL + imageUrl}
          style={{
            aspectRatio: "1366/500",
            objectFit: "cover",
          }}
          width="1366"
        />
        <div className="absolute bottom-0 top-18 left-0 right-0 bg-black bg-opacity-50 p-20">
          <h1 className="text-4xl font-bold text-white">{categories?.title}</h1>
          <p className="mt-2 text-lg text-white">{categories?.description}</p>
        </div>
      </div>

      <Images images={categories} tags={[]} />
    </div>
  );
}
