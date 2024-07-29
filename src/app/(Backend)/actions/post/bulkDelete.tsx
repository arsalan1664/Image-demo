"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import fs from "fs/promises";
export async function BulkDeletePost(
  SelectedRowsIds: any[],
  SelectedRowsImages: any[]
) {
  try {
    console.log("SelectedRowsImages", SelectedRowsImages);
    const deletedPost = await db.posts.deleteMany({
      where: {
        id: { in: SelectedRowsIds },
      },
    });
    revalidatePath("/", "layout");
    if (deletedPost) {
      if (Array.isArray(SelectedRowsImages)) {
        await Promise.all(
          SelectedRowsImages.map(async (imageUrl) => {
            console.log(imageUrl);
            const imagePath = `public${imageUrl}`;
            await fs.unlink(imagePath);
          })
        );
      }

      const deleteTag = await db.postTag.deleteMany({
        where: { postId: null },
      });
      if (!deleteTag) {
        return { error: "Error in Deleting Post" };
      }
      return { success: "Successfully Posts Deleted" };
    } else {
      return { error: "Error in Deleting Post" };
    }
  } catch (error) {
    console.log(error);
    return { error: "Something Went Wrong" };
  }
}
