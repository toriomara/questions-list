import type { FC } from "react";

export const SkillsFilterSkeleton: FC = () => {
  return (
    <div className="space-y-4">
      <div className="h-5 w-20 bg-gray-200 rounded animate-pulse" />

      <div className="flex flex-wrap gap-2">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="h-8 w-20 bg-gray-200 rounded-full animate-pulse"
          />
        ))}
      </div>
    </div>
  );
};
