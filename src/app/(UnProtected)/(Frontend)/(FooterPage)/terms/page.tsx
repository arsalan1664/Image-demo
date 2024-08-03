import React from "react";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-[90vh] h-w-full max-w-4xl mx-auto py-16 md:py-32 px-4 md:px-6">
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4">Terms of Service</h2>
          <div className="space-y-6 text-muted-foreground">
            <p>
              Welcome to our website. By accessing or using our website, you
              agree to be bound by these terms of service and our privacy
              policy.
            </p>
            <p>
              You agree to use our website only for lawful purposes and in a way
              that does not infringe on the rights of, restrict or inhibit
              anyone else use and enjoyment of the website.
            </p>
            <p>
              You must not reproduce, duplicate, copy, sell, resell or exploit
              any portion of the website, use of the website, or access to the
              website without our express written permission.
            </p>
            <p>
              We reserve the right to modify, suspend or discontinue,
              temporarily or permanently, the website or any part of it with or
              without notice.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
