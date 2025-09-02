//- components/table/tfoot.tsx

import { Table } from "@tanstack/react-table";
import Pagination from "./pagination";

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
    <tfoot>
      <tr className="table-tr-th border-t border-t-stone-200">
        <td colSpan={table.getVisibleFlatColumns().length} className="px-3 py-3 first:pl-4 last:pr-4">
          <div className="flex items-center justify-between">
            <div className="text-sm table-icon-td">
              <div>
                Page <span className="font-semibold">{pageIndex}</span>{` `}
                of <span className="font-semibold">{totalPages}</span>
              </div>
              <div className="text-md px-1 text-teal-700">|</div>
              <div>
                <span className="font-semibold">{startRow}</span>-<span className="font-semibold">{endRow}</span>{` `}
                of <span className="font-semibold">{totalRows}</span> records
              </div>
            </div>

            <Pagination
              totalPages={pageCount}
              currentPage={page}
              setPage={setPage}
              loading={loading}
              iconSize={iconSize}
            />
          </div>
        </td>
      </tr>
    </tfoot>
  );
};

export default Tfoot;
