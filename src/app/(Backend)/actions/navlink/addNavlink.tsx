"use server";

import { db } from "@/lib/db";

export async function AddNavLink(state: any, formData: FormData) {
  const title = formData.get("title") as string;
  const link = formData.get("link") as string;
  await db.navItems.create({
    data: { title, link },
  });
  const fieldValues = { title: "", description: "" };
  const message = "success";
  return { message, fieldValues };
}
