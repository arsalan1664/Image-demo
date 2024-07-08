import { PrismaClient } from "@prisma/client";
import React from "react";

async function Servercomponent({ setDbstate }: any) {
  const prisma = new PrismaClient();
  try {
    await prisma.$connect();
    setDbstate("success");
    // return { succcess: "DB Connected Successfully" };
  } catch (error) {
    console.log(error);
    setDbstate("failure");
  } finally {
    await prisma.$disconnect();
  }
  return null;
}

export default Servercomponent;
