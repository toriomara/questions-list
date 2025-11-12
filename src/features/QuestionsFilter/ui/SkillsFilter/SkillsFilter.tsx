import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../shared/redux/model/store";
import { useGetSkillsQuery } from "../../../../enteties/skill";
import { setSkills } from "../../../../widgets/questionFilters/model/filterSlice";
import { FilterSection } from "../../../../shared/ui/FilterSection/FilterSection";
import { SkillsFilterSkeleton } from "./SkillsFilterSkeleton";

export const SkillsFilter = () => {
  const dispatch = useDispatch();
  const { skills } = useSelector((state: RootState) => state.filters);
  const { data, isLoading, isError } = useGetSkillsQuery();

  const items = data?.data ?? [];

  const toggleSkill = (id: number) => {
    const newSkills = skills.includes(id)
      ? skills.filter((s) => s !== id)
      : [...skills, id];
    dispatch(setSkills(newSkills));
  };

  if (isLoading) {
    return <SkillsFilterSkeleton />;
  }

  if (isError) {
    return <p className="my-3">Error loading skills</p>;
  }

  return (
    <FilterSection
      title="Skills"
      items={items}
      activeItems={skills}
      onToggle={toggleSkill}
      isMultiple
    />
  );
};
