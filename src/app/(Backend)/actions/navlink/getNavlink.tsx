"use server";

import { db } from "@/lib/db";

export async function GetNavLink() {
  try {
    const navlinks = await db.navItems.findMany();
    console.log(navlinks);
    return navlinks;
  } catch (error) {
    console.log(error);
  }
}
