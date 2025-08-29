//- components/table/tfoot.tsx

import { Table } from "@tanstack/react-table";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Ellipsis } from "lucide-react";

interface TfootProps<TData> {
  table: Table<TData>;
  totalRows: number;
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
  pageSize: number;
  loading?: boolean;
}

const Tfoot = <TData,>({
  table,
  totalRows,
  page,
  setPage,
  totalPages,
  pageSize,
  loading,
}: TfootProps<TData>) => {
  const iconSize = 16;
  const pageIndex = page;
  const pageCount = totalPages;
  const startRow = (pageIndex - 1) * pageSize + 1;
  const endRow = Math.min(pageIndex * pageSize, totalRows);

  const windowSize = 5;
  const half = Math.floor(windowSize / 2);
  let start = Math.max(0, pageIndex - half);
  let end = Math.min(pageCount - 1, pageIndex + half);

  if (end - start < windowSize - 1) {
    if (start === 0) {
      end = Math.min(pageCount - 1, start + windowSize - 1);
    } else if (end === pageCount - 1) {
      start = Math.max(0, end - windowSize + 1);
    }
  }

  const visiblePages = [];
  for (let i = start; i <= end; i++) {
    visiblePages.push(i);
  }

  return (
    <tfoot className="bg-teal-50">
      <tr className="border-t border-t-stone-200">
        <td colSpan={table.getVisibleFlatColumns().length} className="px-3 py-3 first:pl-4 last:pr-4">
          <div className="flex items-center justify-between">
            <div className="text-sm">
              Showing <b>{startRow}</b> to <b>{endRow}</b> of <b>{totalRows}</b>{" "}
              results
            </div>

            <div className="inline-flex items-center rounded-full border border-stone-200">
              <button
                onClick={() => setPage(1)}
                disabled={loading || pageIndex === 1}
                className="flex input-button-secondary px-1.5 py-1.5 gap-1 rounded-l-full"
              >
                <ChevronsLeft size={iconSize} />
                <span className="pr-1.5">First</span>
              </button>
              <button
                onClick={() => setPage(Math.max(1, pageIndex - 1))}
                disabled={loading || pageIndex === 1}
                className="flex input-button-secondary px-1.5 py-1.5 gap-1"
              >
                <ChevronLeft size={iconSize} />
                <span className="pr-1.5">Prev</span>
              </button>

              {loading ? (
                <button
                  className="flex input-button-secondary px-1.5 py-1.5 gap-1"
                  disabled={true}
                >
                  <Ellipsis size={iconSize} className="text-blue-500 animate-pulse" />
                  {/* <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div> */}
                </button>
              ) : (
                visiblePages.map((i) => (
                  <button
                    key={i + 1}
                    onClick={() => setPage(i + 1)}
                    disabled={loading || (i + 1) === pageIndex}
                    className={`flex input-button-secondary px-1.5 py-1.5 gap-1 ${i + 1 === pageIndex ? 'underline font-bold' : ''}`}
                  >
                    <span className="px-1.5">{i + 1}</span>
                  </button>
                ))
              )}

              <button
                onClick={() => setPage(Math.min(pageCount, pageIndex + 1))}
                disabled={loading || pageIndex >= pageCount}
                className="flex input-button-secondary px-1.5 py-1.5 gap-1"
              >
                <span className="pl-1.5">Next</span>
                <ChevronRight size={iconSize} />
              </button>
              <button
                onClick={() => setPage(pageCount)}
                disabled={loading || pageIndex >= pageCount}
                className="flex input-button-secondary px-1.5 py-1.5 gap-1 rounded-r-full"
              >
                <span className="pl-1.5">Last</span>
                <ChevronsRight size={iconSize} />
              </button>
            </div>
          </div>
        </td>
      </tr>
    </tfoot>
  );
};

export default Tfoot;
