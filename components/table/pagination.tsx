"use client";

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Ellipsis,
} from "lucide-react";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  setPage: (page: number) => void;
  loading?: boolean;
  iconSize: number;
};

const Pagination = ({
  totalPages,
  currentPage,
  setPage,
  loading = false,
  iconSize,
}: PaginationProps) => {
  const renderPages = () => {
    const pages: (number | string)[] = [];

    // Always show first page
    pages.push(1);

    let start = Math.max(2, currentPage - 2);
    let end = Math.min(totalPages - 1, currentPage + 2);

    // Keep exactly 5 pages visible
    if (end - start < 4) {
      if (currentPage <= 3) {
        end = Math.min(totalPages - 1, 5);
      } else if (currentPage >= totalPages - 2) {
        start = Math.max(2, totalPages - 4);
      }
    }

    // Ellipsis on the left
    if (start > 2) {
      pages.push("...");
    }

    // Middle range
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // Ellipsis on the right
    if (end < totalPages - 1) {
      pages.push("...");
    }

    // Always show last page if more than 1
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages.map((page, index) =>
      page === "..." ? (
        <button
          key={`dots-${index}`}
          disabled={true}
          className="flex input-button-secondary px-1.5 py-1.5 gap-1"
        >
          <Ellipsis size={iconSize} />
        </button>
      ) : (
        <button
          key={page}
          onClick={() => setPage(page as number)}
          disabled={currentPage === page}
          className={`flex input-button-secondary px-1.5 py-1.5 gap-1 ${currentPage === page
            ? "underline font-bold"
            : ""
            }`}
        >
          <span className="px-1.5">{page}</span>
        </button>
      )
    );
  };

  return (
    <div className="inline-flex items-center rounded-full border border-stone-200">
      {/* Prev */}
      <button
        onClick={() => setPage(currentPage - 1)}
        disabled={loading || currentPage === 1}
        className="flex input-button-secondary px-1.5 py-1.5 gap-1 rounded-l-full"
      >
        <ChevronLeft size={iconSize} />
        <span className="pr-1.5">Prev</span>
      </button>

      {renderPages()}

      {/* Next */}
      <button
        onClick={() => setPage(currentPage + 1)}
        disabled={loading || currentPage === totalPages}
        className="flex input-button-secondary px-1.5 py-1.5 gap-1 rounded-r-full"
      >
        <span className="pl-1.5">Next</span>
        <ChevronRight size={iconSize} />
      </button>
    </div>
  );
};

export default Pagination;
