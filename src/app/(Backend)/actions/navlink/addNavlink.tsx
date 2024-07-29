"use server";

import { db } from "@/lib/db";

export async function AddNavLink(state: any, formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const link = formData.get("link") as string;

    const existingItem = await db.navItems.findFirst({
      where: {
        title,
      },
    });

    if (existingItem) {
      return { info: true, message: "Navlink Already Exists" };
    }

    await db.navItems.create({
      data: { title, link },
    });
    const fieldValues = { title: "", description: "" };

    return {
      success: true,
      message: "Added Navlink successfully",
      fieldValues,
    };
  } catch (error) {
    return { error: true, message: "Something Went Wrong" };
  }
}
