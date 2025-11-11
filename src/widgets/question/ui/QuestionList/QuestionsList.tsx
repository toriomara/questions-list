import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetQuestionsQuery } from "../../../../enteties/question/api/questionsApi";
import { QuestionItem } from "../../../../enteties/question";
import { Pagination } from "../../../../shared/ui/Pagination/Pagination";
import { QuestionsListSkeleton } from "./QuestionsListSkeleton";
import type { RootState } from "../../../../shared/redux/model/store";
import type { IQuestion } from "../../../../enteties/question/model/types";

export const QuestionsList = () => {
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

  if (isLoading) {
    return <QuestionsListSkeleton />;
  }

  if (error || !questionsData) {
    return (
      <div className="container grid gap-5">
        <div className="flex w-full max-w-[804px] text-center items-center justify-center bg-white p-5 shadow-md rounded-xl">
          Error loading questions
        </div>
      </div>
    );
  }

  const totalPages = Math.ceil(questionsData.total / questionsData.limit);

  return (
    <div className="w-full max-w-[804px] bg-white p-5 shadow-md rounded-xl">
      <p className="mb-6 pb-4 text-2xl border-b border-[#e0e0e0]">Questions</p>
      <ul className="space-y-3">
        {questionsData.data.map((q: IQuestion) => (
          <QuestionItem key={q.id} question={q} />
        ))}
      </ul>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
};