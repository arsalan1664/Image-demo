import GetName from "@/app/(Backend)/actions/websitename/getName";
import React from "react";
import NavbarImage from "./NavbarImage";
import GetLogo from "@/app/(Backend)/actions/websitename/getLogo";
import GetDarkLogo from "@/app/(Backend)/actions/websitename/getDarkLogo";
import Link from "next/link";
import { db } from "@/lib/db";

async function Footer2() {
  const GettheCategories = async () => {
    return await db.categories.findMany({ take: 3 });
  };

  const [name, logo, darkLogo, categories] = await Promise.all([
    GetName(),
    GetLogo(),
    GetDarkLogo(),
    GettheCategories(),
  ]);

  return (
    <footer className="bg-background border-t border-border/40">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <NavbarImage logo={logo} darkLogo={darkLogo} />
            {/* <h4 className="mt-2">{name.success?.title}</h4> */}
          </div>
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="font-medium">Most Popular</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-foreground/80">
                {categories?.map((i) => {
                  return (
                    <Link
                      key={i.id}
                      href={"/c/" + i.id}
                      className="hover:text-foreground"
                    >
                      {i.title}
                    </Link>
                  );
                })}
              </nav>
            </div>
            <div>
              <p className="font-medium">Helpful Links</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-foreground/70">
                <Link href={"/contact"} className="hover:text-foreground">
                  {" "}
                  Contact{" "}
                </Link>
                <Link href={"/about"} className="hover:text-foreground">
                  {" "}
                  About{" "}
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-foreground/80">
                <Link
                  href={"/privacy-policy"}
                  className="hover:text-foreground"
                >
                  {" "}
                  Privacy Policy{" "}
                </Link>
                <Link href={"/terms"} className="hover:text-foreground">
                  {" "}
                  Terms &amp; Conditions{" "}
                </Link>
                <Link href={"/disclaimer"} className="hover:text-foreground">
                  {" "}
                  Disclaimer{" "}
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-800"></p>
      </div>
      <div className="bg-primary-foreground/30 py-4 text-center">
        <p className="text-xs text-muted-foreground">
          © 2024 {name.success?.title} All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer2;
