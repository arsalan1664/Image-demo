"use client";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import React from "react";
import { SocialButtons2 } from "./SocialButtons";

function Component({ imageUrl }: any) {
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
    <div className="flex items-center gap-4 m">
      <Button onClick={handleClick} size="lg">
        <DownloadIcon className="w-5 h-5 mr-2" />
        Download
      </Button>
      <SocialButtons2 />
    </div>
  );
}

export default Component;
