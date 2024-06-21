import React from "react";
import Modal from "../../_component/Modal";
import { Metadata, ResolvingMetadata } from "next";
import { db } from "@/lib/db";

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

async function page({ params }: { params: { id: string } }) {
  const id = params.id;
  return <Modal id={id}></Modal>;
}

export default page;
