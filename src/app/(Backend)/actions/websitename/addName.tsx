"use server";

import { db } from "@/lib/db";

export default async function AddName(state: any, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const existingName = await db.websiteName.findFirst();

    if (existingName) {
      await db.websiteName.update({
        where: { id: existingName.id },
        data: { title: name },
      });
    } else {
      await db.websiteName.create({
        data: { title: name },
      });
    }
    return { success: "asdasdasd" };
  } catch (error) {
    console.log(error)
    return { error: "asdasdasd" };
  }
}
