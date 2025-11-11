interface ShowMoreButtonProps {
  showAll: boolean;
  onClick: () => void;
}

export const ShowMoreButton = ({ showAll, onClick }: ShowMoreButtonProps) => {
  return (
    <button
      className="mt-3 bg-none border-none text-primary-700 hover:underline"
      onClick={onClick}
    >
      {showAll ? "Hide" : "View all"}
    </button>
  );
};
