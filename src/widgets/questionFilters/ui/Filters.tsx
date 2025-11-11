import {
  SearchInput,
  SpecializationsFilter,
  SkillsFilter,
  ComplexityFilter,
  RatingFilter,
} from "../../../features/QuestionsFilter";

export const Filters = () => {
  return (
    <>
      <SearchInput />
      <SpecializationsFilter />
      <SkillsFilter />
      <ComplexityFilter />
      <RatingFilter />
    </>
  );
};
