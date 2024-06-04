"use server";

export async function GetSection() {
  const token = "Bearer uKkBUm36l8U=w2C_v!@";
  const url = `${process.env.NEXT_PUBLIC_URL_API}/api/sections`;
  const response = await fetch(url, {
    headers: {
      Authorization: token,
    },
  });

  return response.json();
}
