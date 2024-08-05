import { GetTag } from "@/app/(Backend)/actions/tag/getTag";
import { Form, Loop } from "./_components/tagForm";
import Header from "@/app/(Protected)/_components/Header";
import { Metadata } from "next";
import EditProvider from "./_components/editContext";
import EditButton from "./_components/EditButton";
import CheckedItemsProvider from "./_components/checkButton";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
///// the code is inserted because of prerender error occure during build process

export const metadata: Metadata = {
  title: `Tags Section `,
};

async function page() {
  const data = await GetTag();
  return (
    <CheckedItemsProvider>
      <EditProvider>
        <Header title={"Tags"} />
        <main className="flex flex-col gap-4 p-4 md:gap-8 md:p-6">
          <section className="flex-1 h-full flex flex-col justify-between overflow-y-auto p-6">
            <div className="mb-8 flex items-center  justify-between w-full">
              <Form />
              <EditButton />
            </div>
            <Loop data={data.tags} />
          </section>
        </main>
      </EditProvider>
    </CheckedItemsProvider>
  );
}

export default page;
