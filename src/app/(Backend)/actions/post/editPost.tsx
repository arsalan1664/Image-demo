"use server";
import { revalidatePath } from "next/cache";

export async function EditPost(state: any, formData: FormData) {
  const token = "Bearer uKkBUm36l8U=w2C_v!@";
  const url = `${process.env.NEXT_PUBLIC_URL_API}/api/posts`;
  const response = await fetch(url, {
    headers: {
      Authorization: token,
    },

    method: "PUT",
    body: formData,
  });

  const res = await response.json();
  revalidatePath("/");
  return res;
}
