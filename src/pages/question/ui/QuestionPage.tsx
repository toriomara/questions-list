import { Link, useParams } from "react-router-dom";
import { useGetQuestionByIdQuery } from "../../../enteties/question/api/questionsApi";
import { QuestionContent, QuestionSidebar } from "../../../widgets/question";
import arrowBack from "@/shared/assets/images/icons/arrowBack.svg";
import { Skeleton } from "../../../shared/ui/Skeletonui/Skeleton";

export const QuestionPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: question, isLoading, isError } = useGetQuestionByIdQuery(id!);

  if (isLoading) {
    return (
      <div className="container grid gap-5">
        <Skeleton height="h-10" width="w-1/4" />
        <div className="flex gap-5">
          <div className="w-full max-w-[804px] flex flex-col gap-5">
            <Skeleton height="h-46" width="w-full" />
            <Skeleton height="h-64" width="w-full" />
            <Skeleton height="h-80" width="w-full" rounded={false} />{" "}
          </div>
          <div className="w-full max-w-[392px] flex flex-col gap-4">
            <Skeleton height="h-64" width="w-full" />
            {/* <Skeleton height="h-20" width="w-full" />
            <Skeleton height="h-24" width="w-full" /> */}
          </div>
        </div>
      </div>
    );
  }

  if (isError || !question) {
    return (
      <div className="container grid gap-5">
        <div className="flex w-full max-w-[804px] text-center items-center justify-center bg-white p-5 shadow-md rounded-xl">
          Error loading question
        </div>
      </div>
    );
  }

  return (
    <div className="container grid gap-5">
      <Link
        className="flex gap-2 items-center text-primary-700"
        to="/questions"
      >
        <img
          className="w-5 h-5 hover:underline transition-all duration-200"
          src={arrowBack}
          alt="Back"
        />
        <div className="hover:underline">Back</div>
      </Link>

      <div className="flex gap-5">
        <QuestionContent question={question} />
        <QuestionSidebar question={question} />
      </div>
    </div>
  );
};
