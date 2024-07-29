"use server";

import { db } from "@/lib/db";

export default async function GetDarkLogo() {
  try {
    const existingName = await db.websiteDarkLogo.findFirst();
    return { success: existingName };
  } catch (error) {
    console.log(error);
    return { error };
  }
}
