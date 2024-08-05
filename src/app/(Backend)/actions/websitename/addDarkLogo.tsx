"use server";

import { db } from "@/lib/db";
import fs from "fs/promises";
import { revalidatePath } from "next/cache";

export default async function AddDarkLogo(state: any, formData: FormData) {
  try {
    const logo = formData.get("logo") as any;

    const existingLogo = await db.websiteDarkLogo.findFirst();

    if (existingLogo) {
      await fs.unlink(existingLogo.logosrc);

      const dirPath = `public/uploads/logo/`;
      await fs.mkdir(dirPath, { recursive: true });
      await fs.writeFile(`${dirPath}${logo.name}`, logo.stream());
      const logosrc = dirPath + logo.name;

      await db.websiteDarkLogo.update({
        where: { id: existingLogo.id },
        data: { logosrc },
      });
    } else {
      const dirPath = `public/uploads/logo/`;
      await fs.mkdir(dirPath, { recursive: true });
      await fs.writeFile(`${dirPath}${logo.name}`, logo.stream());
      const logosrc = dirPath + logo.name;

      await db.websiteDarkLogo.create({
        data: { logosrc },
      });
    }
    revalidatePath("/");
    return { success: "Logo has been changed" };
  } catch (error) {
    console.error("Error uploading logo:", error);
    return { error: "Error uploading logo" };
  }
}
