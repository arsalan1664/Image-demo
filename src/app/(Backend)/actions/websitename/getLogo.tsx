"use server";

import { db } from "@/lib/db";

export default async function GetLogo() {
  try {
    const existingName = await db.websiteLogo.findFirst();
    return { success: existingName };
  } catch (error) {
    console.log(error);
    return { error };
  }
}
