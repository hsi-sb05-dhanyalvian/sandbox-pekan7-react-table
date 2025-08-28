//- components/table/table.tsx

'use client';

import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import React from "react";
import Thead from "./thead";
import Tbody from "./tbody";
import Tfoot from "./tfoot";
import { CirclePlus } from "lucide-react";
import GlobalSearch from "./search";

export type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  pageSize: number;
  totalRows: number;
  page: number;
  setPage: (page: number) => void;
  globalFilter: string;
  setGlobalFilter: (value: string) => void;
  loading?: boolean;
  searchPlaceholder?: string;
};

export function DataTable<TData, TValue>({
  columns,
  data,
  pageSize,
  totalRows,
  page,
  setPage,
  globalFilter,
  setGlobalFilter,
  loading = false,
  searchPlaceholder,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);

  const handleGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(e.target.value);
    setPage(1);
  };
  const handleGlobalFilterClear = () => {
    setGlobalFilter('');
    setPage(1);
  };

  const [columnVisibility] = React.useState<VisibilityState>({});
  const totalPages = Math.ceil(totalRows / pageSize);

  const table = useReactTable({
    data: data,
    columns: columns,
    state: {
      sorting,
      columnFilters,
      globalFilter,
      columnVisibility,
    },
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    manualPagination: true,
    pageCount: totalPages,
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-row gap-3 justify-between items-center">
        <GlobalSearch
          placeholder={searchPlaceholder}
          value={globalFilter}
          onChange={handleGlobalFilterChange}
          onClear={handleGlobalFilterClear}
          loading={loading}
        />

        <div className="flex flex-wrap items-center gap-3">
          <button className="flex input-button-primary px-3 py-2 gap-1">
            <CirclePlus size={18} className="items-center" />
            <div className="flex text-md items-center mr-0.5">Add</div>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-stone-200 shadow-xs">
        <table className="w-full text-left text-sm">
          <Thead table={table} />

          <Tbody table={table} columns={columns} loading={loading} />

          <Tfoot
            table={table}
            totalRows={totalRows}
            page={page}
            setPage={setPage}
            totalPages={totalPages}
            pageSize={pageSize}
            loading={loading}
          />
        </table>
      </div>
    </div>
  );
}
