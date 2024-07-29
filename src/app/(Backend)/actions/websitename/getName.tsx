"use server";

import { db } from "@/lib/db";

export default async function GetName() {
  try {
    const existingName = await db.websiteName.findFirst();
    return { success: existingName };
  } catch (error) {
    console.log(error);
    return { error };
  }
}
