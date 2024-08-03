import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ui/theme-provider";
import GetName from "./(Backend)/actions/websitename/getName";
import { GetScript } from "./(Backend)/actions/script/ScriptAction";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const Name = await GetName();
  return {
    title: {
      template: `%s - ${Name.success?.title} `,
      default: `${Name.success?.title}`,
    },
    description:
      "Immerse yourself in a world of captivating images. Our gallery showcases a variety of images that will inspire and amaze you.",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const res = await GetScript();
  if (res.error) {
    console.log(res.error);
    return;
  }
  const script = res?.success;
  return (
    <html lang="en">
      <head>
        {script?.map((i: any) => {
          const code = i.script;
          return (
            <script key={i.id} dangerouslySetInnerHTML={{ __html: code }} />
          );
        })}
      </head>

      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-muted dark:bg-background ">{children}</div>
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
