"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import fs from "fs/promises";
export async function BulkDeleteCategory(id: string[]) {
  try {
    const existingItems = await db.categories.findMany({
      where: {
        id: {
          in: id,
        },
      },
    });

    if (!existingItems) {
      return { info: "Category does not exist" };
    }
    // deleteing db entries
    await db.categories.deleteMany({
      where: {
        id: {
          in: id,
        },
      },
    });

    //deleting all images
    existingItems.map(async (item) => {
      await fs.unlink(`public${item.imageUrl}`);
    });

    revalidatePath("/");
    return { success: "Successfully Deleted Categories" };
  } catch (error) {
    console.log(error);
    return {
      error: "Something Went Wrong",
    };
  }
}
