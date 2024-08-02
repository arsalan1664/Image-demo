import React from "react";

function Page() {
  return (
    <div className="w-full max-w-4xl mx-auto min-h-[90vh] flex items-center justify-center py-20 md:py-24 px-4 md:px-6">
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-bold mb-4">Disclaimer</h2>
          <div className="space-y-6 text-muted-foreground">
            <p>
              The information and materials contained on this website are
              provided "as is" without warranties of any kind, either express or
              implied. We disclaim all warranties, express or implied, including
              but not limited to implied warranties of merchantability and
              fitness for a particular purpose.
            </p>
            <p>
              We shall not be liable for any damages of any kind arising from
              the use of this website, including but not limited to direct,
              indirect, incidental, punitive, and consequential damages.
            </p>
            <p>
              The content on this website is for informational purposes only and
              should not be construed as professional advice. We are not
              responsible for any errors or omissions in the content or for any
              actions taken based on the information provided.
            </p>
            <p>
              The intellectual property rights in all content, software, and
              materials on this website are owned by us or our licensors. You
              may not modify, copy, distribute, transmit, display, reproduce, or
              create derivative works from this website without our prior
              written consent.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Page;
