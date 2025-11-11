import type { HTMLAttributes } from "react";
import clsx from "clsx";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  height?: string;
  width?: string;
  rounded?: boolean;
}

export const Skeleton = ({
  className,
  height = "h-4",
  width = "w-full",
  rounded = true,
  ...props
}: SkeletonProps) => (
  <div
    className={clsx(
      "bg-neutral-300 animate-pulse",
      height,
      width,
      rounded ? "rounded-md" : "",
      className
    )}
    {...props}
  />
);
