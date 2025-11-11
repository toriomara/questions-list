import arrowPrevious from "@/shared/assets/images/icons/arrowPrevious.svg";
import arrowForward from "@/shared/assets/images/icons/arrowForward.svg";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages: (number | string)[] = [];

    pages.push(1);
    if (totalPages > 1) pages.push(2);

    if (currentPage > 5) {
      pages.push("...");
    }

    for (
      let i = Math.max(3, currentPage - 2);
      i <= Math.min(totalPages - 2, currentPage + 2);
      i++
    ) {
      pages.push(i);
    }

    if (currentPage < totalPages - 4) {
      pages.push("...");
    }

    if (totalPages > 3) pages.push(totalPages - 1);
    if (totalPages > 2) pages.push(totalPages);

    return pages;
  };

  const pages = getPages();

  return (
    <div className="flex items-center justify-center w-[270px] my-10 mx-auto">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${currentPage === 1 ? "arrowDisabled" : "arrow"}`}
      >
        <img src={arrowPrevious} alt="Previous" />
      </button>

      {pages.map((page, idx) =>
        page === "..." ? (
          <span key={`dots-${idx}`}>...</span>
        ) : (
          <div key={idx} className="px-1">
            <button
              // key={page}
              className={`${
                page === currentPage
                  ? "buttonPaginationActive"
                  : "buttonPagination"
              }`}
              onClick={() => onPageChange(page as number)}
            >
              {page}
            </button>
          </div>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${currentPage === totalPages ? "arrowDisabled" : "arrow"}`}
      >
        <img src={arrowForward} alt="Forward" />
      </button>
    </div>
  );
};
