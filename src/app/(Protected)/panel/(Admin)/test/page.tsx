"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

function Page() {
  const [content, setContent] = useState<string>("");
  const handleContentChange = (reason: any) => {
    setContent(reason);
  };

  return (
    <form>
      {" "}
      <Textarea name="value" value={content} readOnly className="hidden" />
      <Button type="submit">asdsd</Button>
    </form>
  );
}

export default Page;
