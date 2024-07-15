"use server";

import { revalidatePath } from "next/cache";

export async function EditCategory(state: any, formData: FormData) {
  const token = "Bearer uKkBUm36l8U=w2C_v!@";
  const url = `${process.env.NEXT_PUBLIC_URL_API}/api/categories`;
  const response = await fetch(url, {
    headers: {
      Authorization: token,
    },

    method: "PUT",
    body: formData,
  });
  if (response.ok) {
    const res = await response.json();
    revalidatePath("/", "page");
    return res;
  } else {
    console.log(response);
  }
}
