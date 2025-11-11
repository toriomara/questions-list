import { QuestionParams } from "../../../../shared/ui/QuestionParams/QuestionParams";
import type { ISingleQuestion } from "../../model/types";

interface QuestionSidebarProps {
  question: ISingleQuestion;
}

export const QuestionSidebar = ({ question }: QuestionSidebarProps) => (
  <aside className="aside hiddenLg rounded-xl">
    <p className="mt-[15px] mb-[8px] text-neutral-700">Level:</p>

    <QuestionParams rate={question.rate} complexity={question.complexity} />

    <p className="mt-[15px] mb-[8px] text-neutral-700">Skills:</p>
    <div className="flex gap-[10px]">
      {question.questionSkills?.map((skill) => (
        <span
          key={skill.id}
          className="flex items-center gap-[6px] border border-primary-700 rounded-xl px-[10px] py-[10px]"
        >
          {/* <img w="10" h="10" src={skill.imageSrc} alt={skill.title} /> */}
          {skill.title}
        </span>
      ))}
    </div>

    <p className="mt-[15px] mb-[8px] text-neutral-700">Keywords:</p>
    <div className="flex gap-[14px] mt-2 text-primary-700">
      {question.keywords?.map((k, idx) => (
        <span key={idx}>#{k}</span>
      ))}
    </div>
  </aside>
);
