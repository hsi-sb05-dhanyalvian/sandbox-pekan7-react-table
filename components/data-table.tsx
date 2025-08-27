//- components/data-table.tsx

'use client';

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

export type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  pageSize: number;
};

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  const table = useReactTable({
    data: data,
    columns: columns,
    state: {
      sorting,
      columnFilters,
      globalFilter,
      columnVisibility,
      pagination: {
        pageIndex: 0,
        pageSize: 15,
      }
    },
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    // onPaginationChange: () => {},
    // manualPagination: false,
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:justify-between md:items-center md:flex-row">
        <input
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search all columns..."
          className="w-full md:w-72 rounded-md border border-stone-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        <div className="flex flex-wrap items-center gap-3">
          {table.getAllLeafColumns().map((column) => (
            <div key={column.id}>
              <label>
                <input
                  type="checkbox"
                  checked={column.getIsVisible()}
                  onChange={(e) =>
                    setColumnVisibility({
                      ...columnVisibility,
                      [column.id]: e.target.checked,
                    })
                  }
                />
                {column.id}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-stone-200 shadow-xs">
        <table className="w-full text-left text-sm">
          <thead className="bg-neutral-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b border-b-stone-200">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-3 font-semibold uppercase"
                    onClick={
                      header.column.getCanSort()
                        ? header.column.getToggleSortingHandler()
                        : undefined
                    }
                  >
                    <div className="flex items-center justify-between">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {header.column.getIsSorted() && (
                        <span>
                          {header.column.getIsSorted() === "asc" ? "🔼" : "🔽"}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="bg-white even:bg-neutral-50">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-3 py-2.5">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <td colSpan={table.getVisibleFlatColumns().length}>
                <div className="flex items-center justify-between bg-gray-50 px-3 py-3 border-t border-t-stone-200">
                  <div className="text-sm">
                    Page <strong>{table.getState().pagination.pageIndex + 1}</strong> of{" "}
                    <strong>{table.getPageCount().toLocaleString()}</strong>
                  </div>

                  <div className="inline-flex items-center rounded-full border border-gray-300 divider divide-gray-300">
                    <button
                      onClick={() => table.previousPage()}
                      disabled={!table.getCanPreviousPage()}
                      className="flex input-button-secondary px-1.5 py-1.5 gap-1 rounded-l-full"
                    >
                      <ChevronLeft size={16} />
                      <span className="pr-1.5">Prev</span>
                    </button>
                    <button
                      onClick={() => table.nextPage()}
                      disabled={!table.getCanNextPage()}
                      className="flex input-button-secondary px-1.5 py-1.5 gap-1 rounded-r-full"
                    >
                      <span className="pl-1.5">Next</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>

        {/* <div className="flex items-center justify-between bg-gray-50 px-3 py-3 border-t border-t-stone-200">
          <div className="text-sm">
            Page <strong>{table.getState().pagination.pageIndex + 1}</strong> of{" "}
            <strong>{table.getPageCount().toLocaleString()}</strong>
          </div>

          <div className="inline-flex items-center rounded-full border border-gray-300 divider divide-gray-300">
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="flex input-button-secondary px-1.5 py-1.5 gap-1 rounded-l-full"
            >
              <ChevronLeft size={16} />
              <span className="pr-1.5">Prev</span>
            </button>
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="flex input-button-secondary px-1.5 py-1.5 gap-1 rounded-r-full"
            >
              <span className="pl-1.5">Next</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}