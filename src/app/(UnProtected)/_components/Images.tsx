"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function Images({ images }: { images: any }) {
  const router = useRouter();
  const imagesrc = "";

  return (
    <div className="p-5 md:p-10 lg:max-w-screen-2xl mx-auto">
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-5  space-y-5 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
        {images?.posts?.map(
          (item: {
            title: string;
            description: string;
            id: string;
            imageUrl: string;
          }) => (
            <div
              key={item.id}
              onClick={() => router.push(`/photos/${item.id}`)}
              className=" overflow-hidden   bg-background cursor-pointer rounded-xl relative group"
            >
              <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/90 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                <div>
                  <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10  transition duration-300 ease-in-out">
                    <div className="font-bold">{item.title}</div>

                    <div className="opacity-60 text-sm ">
                      {item.description}
                    </div>
                  </div>
                </div>
              </div>
              <Image
                width={500}
                height={500}
                alt="Image"
                className="object-cover w-full  group-hover:scale-110 group-hover:brightness-50 transition duration-300 ease-in-out"
                src={process.env.NEXT_PUBLIC_URL + item.imageUrl}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Images;

function elseif(arg0: boolean) {
  throw new Error("Function not implemented.");
}
// function Images({ images }: { images: any }) {
//   return (
//     <div className="p-5 md:p-10">
//       <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-8  lg:space-y-7 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
//         {images?.posts.map(
//           (item: {
//             title: string;
//             description: string;
//             id: string;
//             imageUrl: string;
//           }) => (
//             <div className=" overflow-hidden   bg-background cursor-pointer rounded-xl relative group">
//               <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/90 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
//                 <div>
//                   <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10  transition duration-300 ease-in-out">
//                     <div className="font-bold">{item.title}</div>

//                     <div className="opacity-60 text-sm ">
//                       {item.description}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <Image
//                 width={500}
//                 height={500}
//                 alt="Image"
//                 className="object-cover w-full  group-hover:scale-110 transition duration-300 ease-in-out"
//                 src={item.imageUrl}
//                 onClick={() => router.push(`/photos/${item.id}`)}
//               />
//             </div>
//           )
//         )}
//       </div>
//     </div>
//   );
// }
