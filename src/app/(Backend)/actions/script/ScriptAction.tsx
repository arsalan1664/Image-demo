"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

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
      return { info: true, message: "Script Already Exists" };
    }

    await db.script.create({
      data: { title, script },
    });
    const fieldValues = { title: "", description: "" };

    return {
      success: true,
      message: "Added Script successfully",
      fieldValues,
    };
  } catch (error) {
    return { error: true, message: "Something Went Wrong" };
  }
}

export const GetScript = async () => {
  try {
    const res = await db.script.findMany();
    return { success: res };
  } catch (error) {
    return { error };
  }
};

export const GetSingleScript = async () => {
  try {
    const res = await db.script.findFirst();
    if (!res) return { error: "asdd" };
    return { success: res };
  } catch (error) {
    return { error };
  }
};

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
      revalidatePath("/", "layout");
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
