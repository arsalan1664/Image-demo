import { SidebarNav } from "@/app/(Protected)/_components/SideBarNav";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import SettingAnimate from "@/lib/setting-animate";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
};

const sidebarNavItems = [
  {
    title: "WebsiteName & Logo",
    href: "/panel/setting/websitename",
  },
  {
    title: "Navbar links",
    href: "/panel/setting/navlink",
  },
  {
    title: "Herosection",
    href: "/panel/setting/herosection",
  },
  {
    title: "Homepage MetaTitle",
    href: "/panel/setting/metatitle",
  },
  {
    title: "Script",
    href: "/panel/setting/script",
  },
  {
    title: "Credentials 🔑",
    href: "/panel/setting",
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <SettingAnimate>
        <div className="space-y-6 p-10 pb-16 bg-background">
          <div className="space-y-0.5 flex ">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
              <p className="text-muted-foreground">
                Manage your website settings.
              </p>
            </div>
            <div className="ml-auto">
              <Button className="rounded-full" variant={"outline"} asChild>
                <Link href={"/panel"}>Back </Link>
              </Button>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
            <aside className="-mx-4 lg:w-1/5">
              <SidebarNav items={sidebarNavItems} />
            </aside>
            <div className="flex-1 lg:max-w-2xl">{children}</div>
          </div>
        </div>
      </SettingAnimate>
    </>
  );
}
