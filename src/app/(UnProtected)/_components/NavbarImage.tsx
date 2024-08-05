"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

type propType =
  | {
      success: {
        id: number;
        logosrc: string;
      } | null;
      error?: undefined;
    }
  | {
      error: unknown;
      success?: undefined;
    };

function NavbarImage({
  logo,
  darkLogo,
}: {
  logo: propType;
  darkLogo: propType;
}) {
  const { theme } = useTheme();
  const logosrc = ("/uploads/logo/" +
    logo.success?.logosrc.split("/")[3]) as string;
  const DarkLogosrc = ("/uploads/logo/" +
    darkLogo.success?.logosrc.split("/")[3]) as string;
  return (
    <Image
      src={
        theme == "light"
          ? process.env.NEXT_PUBLIC_URL + logosrc
          : process.env.NEXT_PUBLIC_URL + DarkLogosrc
      }
      alt="logo"
      width={40}
      height={40}
      className="cursor-pointer hover:animate-slowspin text-foreground"
    />
  );
}

export default NavbarImage;
