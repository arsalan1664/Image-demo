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
import InnerHtml from "@/lib/innerHtml";
import InnerHtmlClientWrapper from "@/lib/InnerHtmlClientDynamic";
import ImageLinkCopyButton from "./ImageUrl";

export default async function PhotoCard({ id }: { id: string }) {
  const data = await GetSinglePost({ id });

  const tags: string[] = [];
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
    <ScrollArea className="h-full">
      <div className="  flex flex-col md:flex-row items-start justify-center gap-8 max-w-6xl mx-auto px-4 py-6">
        <div className="flex-1 w-full md:w-auto">
          {data?.filetype === "Video" ? (
            <video
              controls
              width={800}
              height={600}
              className="h-[400px] w-full rounded-lg overflow-hidden object-contain"
              src={process.env.NEXT_PUBLIC_URL + imageUrl}
            />
          ) : (
            <Image
              width={800}
              height={600}
              className="h-[400px] w-full rounded-lg overflow-hidden object-contain"
              src={process.env.NEXT_PUBLIC_URL + imageUrl}
              alt={data?.title as string}
            />
          )}
        </div>
        <div className="flex-1 w-full grid gap-8">
          <div>
            <h1 className="text-3xl font-bold">{data?.title}</h1>
            <div className="text-muted-foreground mt-2">
              <InnerHtmlClientWrapper rawHTML={data?.description} />
            </div>
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
            <SocialButtons2 />
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
