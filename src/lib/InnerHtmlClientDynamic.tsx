"use client";
import dynamic from "next/dynamic";

const ClientOnlyComponent = dynamic(() => import("./innerHtmlClient"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const InnerHtmlClientWrapper = ({ rawHTML }: any) => {
  return <ClientOnlyComponent rawHTML={rawHTML} />;
};
export default InnerHtmlClientWrapper;
