import React from "react";

// export default function Page() {
//   return (
//     <div className="flex items-center justify-center min-h-[90vh] w-full max-w-4xl mx-auto py-16 md:py-32 px-4 md:px-6">
//       <div className="space-y-12">
//         <section>
//           <h2 className="text-3xl font-bold mb-4">About</h2>
//           <div className="space-y-5 text-muted-foreground">
//             <h2 className="text-2xl mt-2">Our Story</h2>
//             <p>
//               Welcome to Image Website, a premier destination for high-quality,
//               royalty-free images. Founded with the mission of providing a
//               diverse collection of visuals to inspire and empower creators, our
//               platform has quickly become a favorite resource for designers,
//               marketers, bloggers, and photographers alike.
//             </p>
//             <h3 className="text-xl ">Our Vision</h3>
//             <p>
//               Our vision is to be the leading platform for image sharing, where
//               creativity meets convenience. We strive to bridge the gap between
//               the need for stunning imagery and the accessibility of
//               high-quality visuals, all in one place.
//             </p>
//             <h3 className="text-xl "> Our Mission</h3>
//             <p>
//               Our mission is to deliver exceptional images that cater to a wide
//               range of needs and industries. We are committed to curating a
//               collection that is not only extensive but also meets the highest
//               standards of quality and relevance.
//             </p>
//             <h3 className="text-2xl ">Meet the team </h3>
//             <p>
//               Our team of passionate professionals is dedicated to ensuring that
//               Image Website remains a top-tier resource for all your image
//               needs. From tech experts to creative curators, each member plays a
//               vital role in delivering the best experience possible.
//             </p>
//             <h3 className="text-2xl ">Our Founders </h3>
//             <p>
//               Our founders bring years of experience in tech and creative
//               industries. Their combined expertise ensures Image Website exceeds
//               industry standards.
//             </p>
//             <h3 className="text-2xl "> Our Creative Curators </h3>
//             <p>
//               Our experienced editors hand-pick images to maintain high quality.
//               Our team stays updated with the latest visual trends and ensures
//               consistency and excellence in every image.
//             </p>
//             <h3 className="text-2xl ">How It Works </h3>
//             <p>
//               Using Image Website is simple. Search for specific images using
//               the search bar and refine results with filters. Preview images in
//               detail before downloading at your desired resolution and file
//               type. Enjoy instant access to your downloaded images.
//             </p>
//             <h3 className="text-2xl ">Our Commitment to Quality </h3>
//             <p>
//               At Image Website, quality is paramount. We provide visually
//               stunning and technically superior images.
//             </p>
//             <h3 className="text-2xl ">Image Standards</h3>
//             <p>
//               Our images are high-resolution, consistent in quality, and offered
//               with clear licensing terms.
//             </p>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

export default function Component() {
  return (
    <main className="max-w-screen-lg mx-auto w-full">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-8 md:space-y-12">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Us
            </h1>
            <div className="grid gap-6 md:gap-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Our Story
                </h2>
                <p className="text-muted-foreground">
                  Welcome to Image Website, a premier destination for
                  high-quality, royalty-free images. Founded with the mission of
                  providing a diverse collection of visuals to inspire and
                  empower creators, our platform has quickly become a favorite
                  resource for designers, marketers, bloggers, and photographers
                  alike.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tighter sm:text-2xl">
                  Our Vision
                </h3>
                <p className="text-muted-foreground">
                  Our vision is to be the leading platform for image sharing,
                  where creativity meets convenience. We strive to bridge the
                  gap between the need for stunning imagery and the
                  accessibility of high-quality visuals, all in one place.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tighter sm:text-2xl">
                  Our Mission
                </h3>
                <p className="text-muted-foreground">
                  Our mission is to deliver exceptional images that cater to a
                  wide range of needs and industries. We are committed to
                  curating a collection that is not only extensive but also
                  meets the highest standards of quality and relevance.
                </p>
              </div>
              <div>
                <h2 className="mb-5  text-2xl font-bold tracking-tighter sm:text-3xl">
                  What Sets Us Apart
                </h2>
                <div className="grid gap-4">
                  <div>
                    <h3 className="text-lg font-bold">Curated Collections</h3>
                    <p className="text-muted-foreground">
                      Every image undergoes a thorough vetting process to ensure
                      quality. Our diverse library of visuals covers a wide
                      range of categories, catering to the diverse needs of our
                      users.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">
                      Seamless User Experience
                    </h3>
                    <p className="text-muted-foreground">
                      Our intuitive platform and powerful search tools make it
                      easy to find the perfect image for your project. With just
                      a few clicks, you can browse, preview, and download
                      high-quality images.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">
                      Commitment to Creators
                    </h3>
                    <p className="text-muted-foreground">
                      We believe in empowering creators and supporting their
                      artistic endeavors. That's why we offer a range of
                      licensing options and provide resources to help you use
                      our images effectively.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="mb-5 text-2xl font-bold tracking-tighter sm:text-3xl">
                  How It Works
                </h2>
                <div className="grid gap-4">
                  <div>
                    <h3 className="text-lg font-bold">Curated Collections</h3>
                    <p className="text-muted-foreground">
                      Using Image Website is simple. Search for specific images
                      using the search bar and refine results with filters.
                      Preview images in detail before downloading at your
                      desired resolution and file type. Enjoy instant access to
                      your downloaded images.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">
                      Our Commitment to Quality{" "}
                    </h3>
                    <p className="text-muted-foreground">
                      At Image Website, quality is paramount. We provide
                      visually stunning and technically superior images.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Image Standards</h3>
                    <p className="text-muted-foreground">
                      Our images are high-resolution, consistent in quality, and
                      offered with clear licensing terms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
