"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import fs from "fs/promises";
export async function BulkTagDelete(id: string[]) {
  try {
    const existingItems = await db.tags.findMany({
      where: {
        id: {
          in: id,
        },
      },
    });

    if (!existingItems) {
      return { info: "Tag does not exist" };
    }
    // deleteing db entries
    await db.tags.deleteMany({
      where: {
        id: {
          in: id,
        },
      },
    });

    await db.postTag.deleteMany({
      where: {
        tagId: null,
      },
    });
    revalidatePath("/");
    return { success: "Successfully Deleted Tags" };
  } catch (error) {
    console.log(error);
    return {
      error: "Something Went Wrong",
    };
  }
}
