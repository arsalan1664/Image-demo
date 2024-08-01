import { JSDOM } from "jsdom";
import DOMPurify from "dompurify";

const window = new JSDOM("").window;
const DOMPurifyServer = DOMPurify(window);

export default function InnerHtml({ rawHTML }: { rawHTML: any }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: DOMPurifyServer.sanitize(rawHTML) }}
    />
  );
}
