import { GetNavLink } from "@/app/(Backend)/actions/navlink/getNavlink";
import GetDarkLogo from "@/app/(Backend)/actions/websitename/getDarkLogo";
import GetLogo from "@/app/(Backend)/actions/websitename/getLogo";
import GetName from "@/app/(Backend)/actions/websitename/getName";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/ui/themeToggle";
import { AlignJustify } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import NavbarImage from "./NavbarImage";

const Navbar = async () => {
  const [navlinks, Name, logo, darkLogo] = await Promise.all([
    GetNavLink(),
    GetName(),
    GetLogo(),
    GetDarkLogo(),
  ]);
  console.log();
  return (
    <div className="w-full h-14 fixed top-0 z-50 px-4 sm:px-10 border-b border-border/40 bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px] ">
        <Link href="/" className="h-auto w-auto flex flex-row items-center">
          <NavbarImage logo={logo} darkLogo={darkLogo} />
          {/* <span className="font-bold ml-[10px]  hidden md:block text-foreground">
            {Name.success?.title}
          </span> */}
        </Link>
        <div className="hidden md:flex items-center gap-5 text-muted-foreground text-sm">
          {navlinks?.map((item, i) => {
            const title = item.title.replace(/-/g, " ");
            return (
              <Link key={i} href={`/c/${item.title}`}>
                {title}
              </Link>
            );
          })}

          <ThemeToggle />
        </div>
        <div className="flex md:hidden items-center gap-5 text-muted-foreground text-sm">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button aria-label="dropdown" variant={"outline"} size={"sm"}>
                <AlignJustify size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 md:hidden">
              <DropdownMenuLabel className="flex items-center justify-between">
                Categories <ThemeToggle size={"sm"} />
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup>
                {" "}
                {navlinks?.map((item, i) => {
                  const title = item.title.split("-")[0];
                  return (
                    <DropdownMenuItem key={i}>
                      <Link href={`/c/${item.title}`}>{title}</Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
