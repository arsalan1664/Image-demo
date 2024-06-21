"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function DeleteNavLink(state: any, formData: FormData) {
  const id = formData.get("id") as string;
  await db.navItems.delete({
    where: { id: parseInt(id) },
  });
  revalidatePath("/");
  const message = "success";
  const deleteState = "";
  return { message, deleteState };
}
