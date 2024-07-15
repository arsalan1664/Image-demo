import { GetTag } from "@/app/(Backend)/actions/tag/getTag";
import { Form, Loop } from "./_components/tagForm";
import Header from "@/app/(Protected)/_components/Header";
import { Metadata } from "next";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
///// the code is inserted because of prerender error occure during build process

export const metadata: Metadata = {
  title: `Tags Section `,
};

async function page() {
  const data = await GetTag();
  return (
    <>
      <Header title={"Tags"} />
      <main className="flex flex-col gap-4 p-4 md:gap-8 md:p-6">
        <section className="flex-1 h-full flex flex-col justify-between overflow-y-auto p-6">
          <div className="mb-8 flex">
            <Form />
          </div>
          <Loop data={data.tags} />
        </section>
      </main>
    </>
  );
}

export default page;
