import { baseApi } from "../../../shared/api/baseApi";
import type { IPaginatedSkills } from "../model/types";

export const skillsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query<IPaginatedSkills, void>({
      query: () => "/api/skills",
    }),
  }),
  overrideExisting: false,
});

export const { useGetSkillsQuery } = skillsApi;
