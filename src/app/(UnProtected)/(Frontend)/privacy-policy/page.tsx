export default function Component() {
  return (
    <div className="flex items-center justify-center min-h-[90vh] w-full max-w-4xl mx-auto py-12 md:py-20 px-4 md:px-6">
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
          <div className="space-y-6 text-muted-foreground">
            <p>
              We take the privacy of our users very seriously. This privacy
              policy outlines how we collect, use, and protect your personal
              information.
            </p>
            <p>
              We may collect information such as your name, email address, and
              usage data when you interact with our website. This information is
              used to provide and improve our services, communicate with you,
              and comply with legal obligations.
            </p>
            <p>
              We use industry-standard security measures to protect your
              personal information from unauthorized access, disclosure, or
              misuse. However, no method of transmission over the internet or
              method of electronic storage is 100% secure, so we cannot
              guarantee absolute security.
            </p>
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
