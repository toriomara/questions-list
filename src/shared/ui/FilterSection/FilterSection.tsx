import { useState } from "react";
import { ShowMoreButton } from "../ShowMoreButton/ShowMoreButton";
import { Button } from "../Button/Button";

interface FilterSectionProps {
  title: string;
  items: { id: number; title: string }[];
  activeItems: number[] | number | null;
  onToggle: (id: number) => void;
  isMultiple: boolean;
}

export const FilterSection = ({
  title,
  items,
  activeItems,
  onToggle,
  isMultiple,
}: FilterSectionProps) => {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? items : items.slice(0, 5);

  return (
    <div className="mt-6">
      <p className="text-sm font-light mb-2 text-neutral-700">{title}</p>
      <div className="flex flex-wrap gap-[10px]">
        {visibleItems.map((item) => (
          <Button
            key={item.id}
            className={`tag ${
              isMultiple
                ? (activeItems as number[]).includes(item.id) && "activeTag"
                : activeItems === item.id && "activeTag"
            }`}
            onClick={() => onToggle(item.id)}
          >
            {item.title}
          </Button>
        ))}
      </div>
      {items.length > 5 && (
        <ShowMoreButton
          showAll={showAll}
          onClick={() => setShowAll(!showAll)}
        />
      )}
    </div>
  );
};
