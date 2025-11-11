import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../shared/redux/model/store";
import { setRate } from "../../../../widgets/questionFilters/model/filterSlice";
import { FilterSection } from "../../../../shared/ui/FilterSection/FilterSection";
import { RATINGS } from "../../../../shared/constants/constants";

export const RatingFilter = () => {
  const dispatch = useDispatch();
  const rate = useSelector((state: RootState) => state.filters.rate);

  const toggleRate = (id: number) => {
    const newRate = rate.includes(id)
      ? rate.filter((r) => r !== id)
      : [...rate, id];
    dispatch(setRate(newRate));
  };

  return (
    <FilterSection
      title="Question rating"
      items={RATINGS.map((r) => ({ id: r, title: r.toString() }))}
      activeItems={rate}
      onToggle={toggleRate}
      isMultiple
    />
  );
};
