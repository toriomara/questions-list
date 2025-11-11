import { baseApi } from "../../../shared/api/baseApi";

type Specialization = {
  id: number;
  title: string;
  description: string;
  imageSrc: string | null;
  createdAt: string;
};

type SpecializationsResponse = {
  data: Specialization[];
  page: number;
  limit: number;
  total: number;
};

export const specializationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecializations: builder.query<SpecializationsResponse, void>({
      query: () => "/specializations",
    }),
  }),
  overrideExisting: false,
});

export const { useGetSpecializationsQuery } = specializationApi;
