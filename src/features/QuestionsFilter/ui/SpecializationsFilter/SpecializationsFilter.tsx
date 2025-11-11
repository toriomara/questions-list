import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../shared/redux/model/store";
import { useGetSpecializationsQuery } from "../../../../enteties/specialization";
import { setSpecialization } from "../../../../widgets/questionFilters/model/filterSlice";
import { FilterSection } from "../../../../shared/ui/FilterSection/FilterSection";
import { Loader } from "../../../../shared/ui/Loader/Loader";

export const SpecializationsFilter = () => {
  const dispatch = useDispatch();
  const { specialization } = useSelector((state: RootState) => state.filters);
  const { data, isLoading, isError } = useGetSpecializationsQuery();

  const items = data?.data ?? [];

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <p className="text-red-500">Error loading specializations</p>
      ) : (
        <FilterSection
          title="Specializations"
          items={items}
          activeItems={specialization}
          onToggle={(id) => dispatch(setSpecialization(id))}
          isMultiple={false}
        />
      )}
    </>
  );
};
