"use server";

import { revalidatePath } from "next/cache";

export async function AddCategory(state: any, formData: FormData) {
  const token = "Bearer uKkBUm36l8U=w2C_v!@";
  const url = `${process.env.NEXT_PUBLIC_URL_API}/api/categories`;
  const response = await fetch(url, {
    headers: {
      Authorization: token,
    },

    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    return;
  }

  const res = await response.json();
  revalidatePath("/", "layout");
  return res;
}
