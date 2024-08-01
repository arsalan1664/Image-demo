import InnerHtml from "@/lib/innerHtml";
import Image from "next/image";
import Link from "next/link";

export default function Explore({ sections }: { sections: any }) {
  const filteredSections = sections
    .map((section: { categories: any[] }) => {
      const validCategories = section.categories.filter(
        (category: { posts: string | any[] }) =>
          category.posts && category.posts.length > 0
      );
      if (validCategories.length === 0) {
        return null;
      }

      return {
        ...section,
        categories: validCategories,
      };
    })
    .filter((section: null) => section !== null);

  return (
    <>
      {filteredSections?.map((item: any) => {
        return (
          <section key={item.id} className="w-full py-12 md:py-16 lg:py-20">
            <div className="container px-4 md:px-6">
              <div className="max-w-2xl mx-auto text-center space-y-4 mb-8 md:mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  {item.title}
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  {item.description}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mx-auto">
                {item.categories.map((catItem: any, i: any) => {
                  return (
                    <div
                      key={i}
                      className="relative overflow-hidden rounded-lg group "
                    >
                      <Link
                        href={`/c/${catItem.id}`}
                        className="absolute inset-0 z-10"
                        prefetch={false}
                      >
                        <span className="sr-only">View</span>
                      </Link>
                      <Image
                        src={process.env.NEXT_PUBLIC_URL + catItem.imageUrl}
                        alt={catItem.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-60 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="p-4 bg-background dark:bg-muted">
                        <h3 className="text-lg font-semibold md:text-xl">
                          {catItem.title}
                        </h3>
                        <div className="text-sm text-muted-foreground">
                          <InnerHtml rawHTML={catItem.description} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
