import React from "react";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-[90vh] w-full max-w-4xl mx-auto py-16 md:py-32 px-4 md:px-6">
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <div className="space-y-5 text-muted-foreground">
            <h2 className="text-2xl mt-2">Our Story</h2>
            <p>
              Welcome to Image Website, a premier destination for high-quality,
              royalty-free images. Founded with the mission of providing a
              diverse collection of visuals to inspire and empower creators, our
              platform has quickly become a favorite resource for designers,
              marketers, bloggers, and photographers alike.
            </p>
            <h3 className="text-xl ">Our Vision</h3>
            <p>
              We may collect information such as your name, email address, and
              usage data when you interact with our website. This information is
              used to provide and improve our services, communicate with you,
              and comply with legal obligations.
            </p>

            <h3 className="text-xl "> Our Mission</h3>
            <p>
              We use industry-standard security measures to protect your
              personal information from unauthorized access, disclosure, or
              misuse. However, no method of transmission over the internet or
              method of electronic storage is 100% secure, so we cannot
              guarantee absolute security.
            </p>
            <h3 className="text-2xl "> What Sets Us Apart</h3>
            <p>
              We may share your information with third-party service providers
              who assist us in operating the website and delivering our
              services. These providers are bound by confidentiality agreements
              and are prohibited from using your information for any other
              purpose.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
