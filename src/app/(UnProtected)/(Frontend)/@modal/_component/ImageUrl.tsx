"use client";
import { CheckCheck, Copy } from "lucide-react";
import React, { useState } from "react";

function ImageLinkCopyButton({ imageUrl }: { imageUrl: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(imageUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
      })
      .catch((err) => console.error("Failed to copy", err));
  };

  return (
    <button onClick={handleCopy}>{copied ? <CheckCheck /> : <Copy />}</button>
  );
}

export default ImageLinkCopyButton;
