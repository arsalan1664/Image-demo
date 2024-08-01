"use client";

import DOMPurify from "dompurify";

export default function InnerHtmlClient({ rawHTML }: { rawHTML: any }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rawHTML) }} />
  );
}
