"use server";
import { db } from "@/lib/db";

export async function MetaTitle(state: any, formData: FormData) {
  try {
    const metaTitle = formData.get("metaTitle") as string;
    const metaDesc = formData.get("metaDesc") as string;

    const existingItem = await db.homeMeta.findFirst();
    if (!existingItem) {
      await db.homeMeta.create({
        data: {
          metaTitle,
          metaDesc,
        },
      });

      return { success: "Created Homepage metatitle and desc" };
    } else if (existingItem) {
      await db.homeMeta.update({
        where: {
          id: existingItem.id,
        },
        data: {
          metaTitle,
          metaDesc,
        },
      });
      return { success: "Updated Homepage metatitle and desc" };
    }
  } catch (error) {
    console.log(error);
    return { error: "Something Went Wrong" };
  }
}

export async function GetHomePage() {
  try {
    const res = await db.homeMeta.findFirst();
    return { success: res };
  } catch (error) {
    console.log(error);
    return { error };
  }
}
