import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
const Loading = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className=" my-6 h-6 flex justify-between rounded-xl  ">
        <Skeleton className="h-8 w-80 rounded-full" />
        <Skeleton className="h-8 w-36 rounded-full" />
      </div>


        <Skeleton className="h-3 " />
        <Skeleton className="h-3 w-[80%]" />
        <Skeleton className="h-3 " />
        <Skeleton className="h-3 w-[80%]" />

    </div>
  );
};

export default Loading;
