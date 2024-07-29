"use server";

import { db } from "@/lib/db";

export async function HeroSection(state: any, formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const desc = formData.get("desc") as string;

    const existingItem = await db.heroSection.findFirst();
    if (!existingItem) {
      await db.heroSection.create({
        data: {
          title,
          desc,
        },
      });

      return { success: "Created herosetion title and desc" };
    } else if (existingItem) {
      await db.heroSection.update({
        where: {
          id: existingItem.id,
        },
        data: {
          title,
          desc,
        },
      });
      return { success: "Updated herosetion title and desc" };
    }
  } catch (error) {
    console.log(error);
    return { error: "Something Went Wrong" };
  }
}

export async function GetHeroSection() {
  try {
    const res = await db.heroSection.findFirst();
    return { success: res };
  } catch (error) {
    console.log(error);
    return { error };
  }
}
