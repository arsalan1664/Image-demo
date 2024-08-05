import React from "react";
import Navbar from "../_components/Navbar";
import Footer2 from "../_components/Footer2";
import { GetScript } from "@/app/(Backend)/actions/script/ScriptAction";
import Script from "next/script";

async function layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const res = await GetScript();
  return (
    <>
      {res.success?.map((i: any) => {
        const code = i.script;
        return (
          <Script
            key={i.id}
            id={i.title}
            dangerouslySetInnerHTML={{ __html: code }}
          />
        );
      })}
      ;
      <Navbar />
      {children}
      <Footer2 />
      {modal}
    </>
  );
}

export default layout;
