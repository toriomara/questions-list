import { useState } from "react";
import { useSelector } from "react-redux";
import { Filters } from "../../../widgets/questionFilters";
import type { RootState } from "../../../shared/redux/model/store";
import { useGetQuestionsQuery } from "../../../enteties/question/api/questionsApi";
import { QuestionsListSkeleton } from "../../../widgets/question/ui/QuestionList/QuestionsListSkeleton";
import { QuestionsList } from "../../../widgets/question";

export function QuestionsPage() {
  const [page, setPage] = useState(1);
  const limit = 10;

  const { specialization, skills, complexity, rate, search } = useSelector(
    (state: RootState) => state.filters
  );

  const {
    data: questionsData,
    isLoading,
    error,
  } = useGetQuestionsQuery({
    page,
    limit,
    specialization,
    skills,
    complexity,
    rate,
    search,
  });

  return (
    <div className="container flex gap-5">
      {isLoading ? (
        <QuestionsListSkeleton />
      ) : error ? (
        <div className="flex text-center items-center justify-center w-full max-w-[804px] bg-white p-5 shadow-md rounded-xl">
          Error loading questions
        </div>
      ) : (questionsData?.data?.length ?? 0) > 0 ? (
        <QuestionsList
          questions={questionsData?.data ?? []}
          currentPage={page}
          totalPages={Math.ceil(
            (questionsData?.total ?? 0) / (questionsData?.limit ?? limit)
          )}
          onPageChange={setPage}
        />
      ) : (
        <div className="flex text-center items-center justify-center w-full max-w-[804px] bg-white p-5 shadow-md rounded-xl">
          <p className="">
            Sorry, nothing matched your search. <br />
            Try changing your search or use our categories
          </p>
        </div>
      )}
      <div className="hidden lg:block w-full max-w-[392px]">
        <aside className="aside rounded-lg">
          <Filters />
        </aside>
      </div>
    </div>
  );
}
