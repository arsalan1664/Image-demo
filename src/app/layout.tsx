import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ui/theme-provider";
import GetName from "./(Backend)/actions/websitename/getName";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
