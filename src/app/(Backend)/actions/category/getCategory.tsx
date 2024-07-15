"use server";

export async function GetCategory() {
  const token = "Bearer uKkBUm36l8U=w2C_v!@";
  const url = `${process.env.NEXT_PUBLIC_URL_API}/api/categories`;
  const response = await fetch(url, {
    headers: {
      Authorization: token,
    },
  });
  if (response.ok) {
    const res = await response.json();
    return res;
  } else {
    console.log(response);
  }
}
