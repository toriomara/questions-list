interface QuestionCardProps {
  title: string;
  children: React.ReactNode;
}

export const QuestionCard = ({ title, children }: QuestionCardProps) => (
  <div className="bg-white rounded-xl p-5 shadow-lg">
    <p className="text-xl">{title}</p>
    {children}
  </div>
);
