import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  TagIcon,
  DownloadIcon,

} from "lucide-react";

const LoadingCard = () => {
  return (
    <div className=" flex flex-col md:flex-row items-start justify-between gap-8 max-w-6xl mx-auto px-4 py-6">
      <div className="flex-1 w-full md:w-auto ml-auto">
        <Skeleton className="h-96 w-96 " />
      </div>
      <div className="flex-1 w-full grid gap-8">
        <div>
          <Skeleton className="h-8 w-96" />
          <Skeleton className="h-8 w-96 mt-2" />
        </div>

        <div className="flex flex-wrap gap-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-sm font-medium">
            <TagIcon className="w-4 h-4" />
            ...
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-sm font-medium">
            <TagIcon className="w-4 h-4" />
            ...
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-sm font-medium">
            <TagIcon className="w-4 h-4" />
            ...
          </div>
        </div>
        <div className="flex items-center gap-4 mt-">
          <Button size="lg" disabled className="bg-opacity-70">
            <DownloadIcon className="w-5 h-5 mr-2" />
            Download
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
