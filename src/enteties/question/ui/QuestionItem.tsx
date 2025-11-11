import { useState } from "react";
import { Link } from "react-router-dom";
import accordeon from "@/shared/assets/images/icons/accordeon.svg";
import accordeonClose from "@/shared/assets/images/icons/accordeonClose.svg";
import arrowRight from "@/shared/assets/images/icons/arrowRight.svg";
import { QuestionParams } from "../../../shared/ui/QuestionParams/QuestionParams";
import type { IQuestion } from "../model/types";

interface QuestionItemProps {
  question: IQuestion;
}

export const QuestionItem = ({ question }: QuestionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ul>
      <li className="p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="flex items-center gap-3 text-xl font-normal m-0 before:content-[''] before:flex-shrink-0 before:w-2 before:h-2 before:rounded-full before:bg-primary-700">
            {question.title}
          </p>
          <img src={isOpen ? accordeonClose : accordeon} alt="Toggle" />
        </div>

        {isOpen && (
          <div className="relative pb-10 mt-6">
            <QuestionParams
              rate={question.rate}
              complexity={question.complexity}
            />

            <div
              className="mt-6"
              dangerouslySetInnerHTML={{
                __html: question.shortAnswer || "No short answer available",
              }}
            />

            <div className="absolute right-[10px] bottom-[10px]">
              <Link
                to={`/questions/${question.id}`}
                className="inline-flex cursor-pointer items-center gap-[6px] text-primary-700 no-underline hover:underline transition duration-300"
              >
                More
                <img src={arrowRight} alt="More" />
              </Link>
            </div>
          </div>
        )}
      </li>
    </ul>
  );
};
