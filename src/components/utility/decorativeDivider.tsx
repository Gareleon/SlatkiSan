"use client";

import { cn } from "@/lib/utils";

type DecorativeDividerProps = {
  className?: string;
};

export default function DecorativeDivider({
  className,
}: DecorativeDividerProps) {
  return (
    <div
      className={cn("flex items-center justify-center w-full my-8", className)}
    >
      <div className="flex items-center gap-4 w-full max-w-md">
        <div className="flex-1 h-0.5 bg-primary/30 rounded-full" />
        <div className="w-3 h-3 rounded-full bg-primary shadow-md" />
        <div className="flex-1 h-0.5 bg-primary/30 rounded-full" />
      </div>
    </div>
  );
}
