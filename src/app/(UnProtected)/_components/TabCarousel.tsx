import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { GetCategory } from "@/app/(Backend)/actions/category/getCategory";

export async function TabCarousel() {
  try {
    const { categories } = await GetCategory();

    return (
      <Carousel
        opts={{
          align: "center",
        }}
        className="max-w-[230px] sm:max-w-[400px] md:max-w-lg lg:max-w-[900px] xl:max-w-screen-lg mx-auto py-1 sm:py-2 "
      >
        <CarouselContent>
          {categories?.map((item: any) => (
            <CarouselItem key={item.id} className="basis-1/3 lg:basis-1/6">
              <div className="">
                <Link
                  href={`/c/${item.id}`}
                  className="flex items-center  border hover:border-purple-600 px-3 py-1 bg-background dark:bg-muted rounded-full"
                >
                  <span className="text-center mx-auto text-xs sm:text-sm">
                    {item.title}
                  </span>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  } catch (error) {
    console.log(error);
    return;
  }
}
