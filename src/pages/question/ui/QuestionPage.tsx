import { Link, useParams } from "react-router-dom";
import { useGetQuestionByIdQuery } from "../../../enteties/question/api/questionsApi";
import { QuestionContent, QuestionSidebar } from "../../../widgets/question";
import { QuestionPageSkeleton } from "./QuestionpageSkeleton";
import arrowBack from "@/shared/assets/images/icons/arrowBack.svg";

export const QuestionPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: question, isLoading } = useGetQuestionByIdQuery(id!);

  if (isLoading || !question) {
    return <QuestionPageSkeleton />;
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
