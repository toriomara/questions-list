import type { RootState } from "../../../../shared/redux/model/store";
import { useDispatch, useSelector } from "react-redux";
import { COMPLEXITY_VALUES } from "../../../../shared/constants/constants";
import { setComplexity } from "../../../../widgets/questionFilters/model/filterSlice";
import { Button } from "../../../../shared/ui";

export const ComplexityFilter = () => {
  const dispatch = useDispatch();
  const complexity = useSelector(
    (state: RootState) => state.filters.complexity
  );

  const toggleComplexityRange = (range: number[]) => {
    const newValues = [...complexity];
    if (range.every((v) => newValues.includes(v))) {
      dispatch(setComplexity(newValues.filter((v) => !range.includes(v))));
    } else {
      dispatch(setComplexity([...newValues, ...range]));
    }
  };

  return (
    <div className="pt-6">
      <p className="text-sm font-light mb-2 text-neutral-700">Question difficulty</p>
      <div className="flex flex-wrap gap-[10px]">
        {COMPLEXITY_VALUES.map((range) => (
          <Button
            key={range.id}
            className={`tag ${
              range.value.every((v) => complexity.includes(v))
                ? "activeTag"
                : ""
            }`}
            onClick={() => toggleComplexityRange(range.value)}
          >
            {range.title}
          </Button>
        ))}
      </div>
    </div>
  );
};