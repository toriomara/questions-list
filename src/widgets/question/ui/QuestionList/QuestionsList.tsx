import type { IQuestion } from "../../../../enteties/question/model/types";
import { QuestionItem } from "../../../../enteties/question";
import { Pagination } from "../../../../shared/ui/Pagination/Pagination";

interface QuestionsListProps {
  questions: IQuestion[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const QuestionsList = ({
  questions,
  currentPage,
  totalPages,
  onPageChange,
}: QuestionsListProps) => {
  return (
    <div className="w-full max-w-[804px] bg-white p-5 shadow-md rounded-xl">
      <p className="mb-6 pb-4 text-2xl border-b border-[#e0e0e0]">Questions</p>
      <ul className="space-y-3">
        {questions.map((q) => (
          <QuestionItem key={q.id} question={q} />
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};
