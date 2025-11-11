import { QuestionCard } from "../../../../shared/ui/QuestionCard/QuestionCard";
import type { ISingleQuestion } from "../../model/types";

interface QuestionContentProps {
  question: ISingleQuestion;
}

export const QuestionContent = ({ question }: QuestionContentProps) => (
  <div className="flex flex-1 flex-col gap-5">
    <QuestionCard title="question">
      <p className="text-2xl font-[500]">{question.title}</p>
      <p className="pt-4">{question.description}</p>
    </QuestionCard>

    <QuestionCard title="Short answer">
      <div
        className="pt-4"
        dangerouslySetInnerHTML={{ __html: `${question.shortAnswer}` }}
      />
    </QuestionCard>

    <QuestionCard title="Full answer">
      <div
        className="pt-4"
        dangerouslySetInnerHTML={{ __html: `${question.longAnswer}` }}
      />
    </QuestionCard>
  </div>
);
