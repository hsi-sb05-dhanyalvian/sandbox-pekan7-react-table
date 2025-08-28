//- components/table/tfoot.tsx

import { Table } from "@tanstack/react-table";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

interface TfootProps<TData> {
  table: Table<TData>;
  totalRows: number;
}

const Tfoot = <TData,>({ table, totalRows }: TfootProps<TData>) => {
  const iconSize = 16;
  const pageIndex = table.getState().pagination.pageIndex;
  const pageSize = table.getState().pagination.pageSize;
  const pageCount = table.getPageCount();
  const startRow = pageIndex * pageSize + 1;
  const endRow = Math.min((pageIndex + 1) * pageSize, totalRows);
  
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
        <td colSpan={table.getVisibleFlatColumns().length}>
          <div className="flex items-center justify-between px-3 py-3 first:pl-6 last:pr-6">
            <div className="text-sm">
              Showing <b>{startRow}</b> to <b>{endRow}</b> of <b>{totalRows}</b>{" "}
              results
            </div>

            <div className="inline-flex items-center rounded-full border border-gray-300">
              <button
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
                className="flex input-button-secondary px-1.5 py-1.5 gap-1 rounded-l-full"
              >
                <ChevronsLeft size={iconSize} />
                <span className="pr-1.5">First</span>
              </button>
              <button
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className="flex input-button-secondary px-1.5 py-1.5 gap-1"
              >
                <ChevronLeft size={iconSize} />
                <span className="pr-1.5">Prev</span>
              </button>

              {visiblePages.map((i) => (
                <button
                  key={i}
                  onClick={() => table.setPageIndex(i)}
                  disabled={i === pageIndex}
                  className={`flex input-button-secondary px-1.5 py-1.5 gap-1 ${i === pageIndex ? 'underline font-bold' : ''}`}
                >
                  <span className="px-1.5">{i + 1}</span>
                </button>
              ))}

              <button
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                className="flex input-button-secondary px-1.5 py-1.5 gap-1"
              >
                <span className="pl-1.5">Next</span>
                <ChevronRight size={iconSize} />
              </button>
              <button
                onClick={() => table.setPageIndex(pageCount - 1)}
                disabled={!table.getCanNextPage()}
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
