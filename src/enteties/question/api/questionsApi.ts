import { baseApi } from "../../../shared/api/baseApi";
import type {
  GetQuestionsParams,
  IQuestionItemResponse,
  IQuestionsResponse,
} from "../model/types";

export const questionsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getQuestions: build.query<IQuestionsResponse, GetQuestionsParams>({
      query: ({
        page,
        limit,
        specialization,
        skills,
        complexity,
        rate,
        search,
      }) => ({
        url: "/questions/public-questions1",
        params: {
          page,
          limit,
          ...(specialization ? { specialization } : {}),
          ...(skills && skills.length > 0 ? { skills } : {}),
          ...(complexity && complexity.length > 0
            ? { complexity: complexity.join(",") }
            : {}),
          ...(rate && rate.length > 0 ? { rate } : {}),
          ...(search ? { keywords: search } : {}),
        },
      }),
    }),

    getQuestionById: build.query<IQuestionItemResponse, string | number>({
      query: (id) => `/api/questions/public-questions/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetQuestionsQuery, useGetQuestionByIdQuery } = questionsApi;
