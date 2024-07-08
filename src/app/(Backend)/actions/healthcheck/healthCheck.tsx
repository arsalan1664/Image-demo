"use server";
import { PrismaClient } from "@prisma/client";

export async function DBcheck() {
  const prisma = new PrismaClient();
  try {
    await prisma.$connect();
    return { succcess: "DB Connected Successfully" };
  } catch (error) {
    return { error: "Failed to connect DB" };
  } finally {
    await prisma.$disconnect();
  }
}

export async function ServerActions() {
  try {
    return { succcess: "DB Connected Successfully" };
  } catch (error) {
    return { error: "Failed to connect DB" };
  }
}

export async function ServerApiActions() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/api/healthcheck`
    );
    if (res.ok) return { succcess: "DB Connected Successfully" };
  } catch (error) {
    return { error: "Failed to connect DB" };
  }
}
