import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import GetSinglePost from "@/app/(Backend)/actions/post/getSinglePost";
import { SocialButtons2 } from "../../photos/[id]/SocialButtons";
import Link from "next/link";
import {
  DownloadIcon,
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
  TagIcon,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default async function PhotoCard({ id }: { id: string }) {
  const data = await GetSinglePost({ id });

  const tags: string[] = [];
  console.log(tags);
  const imageUrl = data?.imageUrl as string;
  data?.postTags?.forEach((item: any) => {
    const title = item.tag?.title;
    tags.push(title);
  });

  const handleClick = async () => {
    try {
      const fileUrl = `${imageUrl}`;

      // Fetch file content from the server
      const response = await fetch(fileUrl);
      if (!response.ok) {
        throw new Error("Failed to download file");
      }

      // Read file content as blob
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob); // Use blob URL
      link.setAttribute("download", imageUrl);
      link.click();
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    // <div className="w-full  absolute p-10 pb-2 h-full flex flex-col rounded-xl bg-background bg-clip-border shadow-md">
    //   <div className="h-72 overflow-hidden rounded-xl bg-background bg-clip-border">
    //     <Image
    //       width={500}
    //       height={500}
    //       src={process.env.NEXT_PUBLIC_URL + imageUrl}
    //       className="h-full w-full object-cover"
    //       alt={data?.title as string}
    //     />
    //   </div>

    //   <div className="p-6 pb-2">
    //     <div className="mb-2 flex items-center justify-between">
    //       <p className="block font-sans text-base font-medium leading-relaxed antialiased">
    //         {data?.title}
    //       </p>
    //       <p className="block font-sans text-base font-medium leading-relaxed antialiased">
    //         &nbsp;
    //       </p>
    //     </div>
    //     <p className="block font-sans text-sm font-normal leading-normal antialiased opacity-75">
    //       {data?.description}
    //     </p>
    //   </div>

    //   <div className="p-6">
    //     <div className="gap-2 grid grid-cols-5 font-sans text-sm font-normal leading-normal antialiased opacity-75">
    //       {tags.map((item, i) => (
    //         <Badge key={i}>{item}</Badge>
    //       ))}
    //     </div>
    //   </div>

    //   <div className="p-6 mt-auto">
    //     <Button
    //       onClick={handleClick}
    //       className="block w-full select-none rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    //     >
    //       Download
    //     </Button>
    //     <SocialButtons />
    //   </div>
    // </div>
    <ScrollArea className="h-full">
      <div className=" flex flex-col md:flex-row items-start justify-center gap-8 max-w-6xl mx-auto px-4 py-6">
        <div className="flex-1 w-full md:w-auto">
          <Image
            width={800}
            height={600}
            className="w-full rounded-lg overflow-hidden object-cover"
            src={process.env.NEXT_PUBLIC_URL + imageUrl}
            alt={data?.title as string}
          />
        </div>
        <div className="flex-1 w-full grid gap-8">
          <div>
            <h1 className="text-3xl font-bold">{data?.title}</h1>
            <p className="text-muted-foreground mt-2">{data?.description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((item, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-sm font-medium"
              >
                <TagIcon className="w-4 h-4" />
                {item}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 mt-">
            <Button onClick={handleClick} size="lg">
              <DownloadIcon className="w-5 h-5 mr-2" />
              Download
            </Button>
            {/* <div className="flex items-center gap-2">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                <TwitterIcon className="w-6 h-6" />
                <span className="sr-only">Share on Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                <FacebookIcon className="w-6 h-6" />
                <span className="sr-only">Share on Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                <LinkedinIcon className="w-6 h-6" />
                <span className="sr-only">Share on LinkedIn</span>
              </Link>
            </div> */}
            <SocialButtons2 />
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
