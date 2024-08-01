"use client";
import { Twitter, Facebook, Linkedin, Copy } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

export function SocialButtons() {
  const pathname = usePathname();
  const FacebookUrl = process.env.NEXT_PUBLIC_URL_API + pathname;
  const LinkedinUrl = process.env.NEXT_PUBLIC_URL_API + pathname;
  const TwiterUrl = process.env.NEXT_PUBLIC_URL_API + pathname;
  return (
    <div className="space-x-4 flex items-center justify-center w-full mt-4">
      <FacebookShareButton url={FacebookUrl}>
        <Facebook />
      </FacebookShareButton>
      <TwitterShareButton url={TwiterUrl}>
        <Twitter />
      </TwitterShareButton>
      <LinkedinShareButton url={LinkedinUrl}>
        <Linkedin />
      </LinkedinShareButton>
    </div>
  );
}

export function SocialButtons2() {
  const pathname = usePathname();
  const FacebookUrl = process.env.NEXT_PUBLIC_URL_API + pathname;
  const LinkedinUrl = process.env.NEXT_PUBLIC_URL_API + pathname;
  const TwiterUrl = process.env.NEXT_PUBLIC_URL_API + pathname;
  return (
    <div className="space-x-4 flex items-center justify-start w-full mt-4">
      <FacebookShareButton url={FacebookUrl}>
        <Facebook />
      </FacebookShareButton>
      <TwitterShareButton url={TwiterUrl}>
        <Twitter />
      </TwitterShareButton>
      <LinkedinShareButton url={LinkedinUrl}>
        <Linkedin />
      </LinkedinShareButton>
      <Copy />
    </div>
  );
}
