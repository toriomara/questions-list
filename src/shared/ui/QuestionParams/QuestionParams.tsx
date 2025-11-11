interface QuestionParamsProps {
  rate: number;
  complexity: number;
}

 export const QuestionParams = ({ rate, complexity }: QuestionParamsProps) => (
  <div className="flex gap-4">
    <span className="px-[10px] py-[6px] bg-neutral-50 rounded-lg text-sm text-neutral-800">
      Rating:
      <span className="ml-3 bg-primary-700 text-white py-0.5 px-1 rounded font-semibold text-sm">
        {rate}
      </span>
    </span>
    <span className="px-[10px] py-[6px] bg-neutral-50 rounded-lg text-sm text-neutral-800">
      Complexity:{" "}
      <span className="ml-3 bg-primary-700 text-white py-0.5 px-1 rounded font-semibold text-sm">
        {complexity}
      </span>
    </span>
  </div>
);
