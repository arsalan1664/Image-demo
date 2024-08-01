"use server";

import { db } from "@/lib/db";

export async function AddScript(state: any, formData: FormData) {
  try {
    const title = formData.get("script-title") as string;
    const script = formData.get("script") as string;

    const existingItem = await db.script.findFirst({
      where: {
        title,
      },
    });

    if (existingItem) {
      console.log(existingItem);
      return { info: true, message: "Navlink Already Exists" };
    }

    await db.script.create({
      data: { title, script },
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

export async function GetScript() {
  try {
    const res = await db.script.findMany();
    return {
      success: res,
    };
  } catch (error) {
    return {
      error: error,
    };
  }
}

export async function DeleteScript(id: string) {
  try {
    const existingItem = await db.script.findFirst({
      where: {
        id,
      },
    });

    if (existingItem) {
      await db.script.delete({
        where: {
          id,
        },
      });

      const fieldValues = { title: "", description: "" };

      return {
        success: true,
        message: "Deleted script successfully",
        fieldValues,
      };
    }
  } catch (error) {
    return { error: true, message: "Something Went Wrong" };
  }
}
