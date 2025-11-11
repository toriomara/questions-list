// import { QuestionsList } from "../../../widgets/question";
// import { Filters } from "../../../widgets/questionFilters";

// export function QuestionsPage() {

//   return (
//     <div className="container flex gap-5">
//       <QuestionsList />
//       <div className="hidden lg:block w-full max-w-[392px]">
//         <aside className="aside rounded-lg">
//           <Filters />
//         </aside>
//       </div>
//     </div>
//   );
// }

import { useSelector } from "react-redux";
import { QuestionsList } from "../../../widgets/question";
import { Filters } from "../../../widgets/questionFilters";
import type { RootState } from "../../../shared/redux/model/store";
import { useGetQuestionsQuery } from "../../../enteties/question/api/questionsApi";
import { QuestionsListSkeleton } from "../../../widgets/question/ui/QuestionList/QuestionsListSkeleton";

export function QuestionsPage() {
  const { specialization, skills, complexity, rate, search } = useSelector(
    (state: RootState) => state.filters
  );

  const {
    data: questionsData,
    isLoading,
    error,
  } = useGetQuestionsQuery({
    page: 1,
    limit: 10,
    specialization,
    skills,
    complexity,
    rate,
    search,
  });

  return (
    <div className="container flex gap-5">
      {isLoading ? (
        // <p>Loading questions...</p>
        <QuestionsListSkeleton />
      ) : error ? (
        <p>Error loading questions</p>
      ) : (questionsData?.data?.length ?? 0) > 0 ? (
        <QuestionsList />
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
