"use client";

import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import { useQuery } from "@tanstack/react-query";

type User = {
  id: number;
  name: string;
  email: string;
};

type ApiResponse = {
  data: User[];
  total: number;
};

async function fetchUsers(page: number, limit: number): Promise<ApiResponse> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`
  );
  const total = Number(res.headers.get("x-total-count") ?? "20"); // jsonplaceholder
  const data = await res.json();
  return { data, total };
}

export default function DataTable() {
  const [pageIndex, setPageIndex] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(5);

  const { data, isLoading } = useQuery({
    queryKey: ["users", pageIndex, pageSize],
    queryFn: () => fetchUsers(pageIndex + 1, pageSize), // API is 1-based
    // keepPreviousData: true,
  });

  const columns = React.useMemo<ColumnDef<User>[]>(
    () => [
      { accessorKey: "id", header: "ID" },
      { accessorKey: "name", header: "Name" },
      { accessorKey: "email", header: "Email" },
    ],
    []
  );

  const table = useReactTable({
    data: data?.data ?? [],
    columns,
    pageCount: Math.ceil((data?.total ?? 0) / pageSize),
    state: { pagination: { pageIndex, pageSize } },
    onPaginationChange: (updater) => {
      if (typeof updater === "function") {
        const newState = updater({ pageIndex, pageSize });
        setPageIndex(newState.pageIndex);
        setPageSize(newState.pageSize);
      } else {
        setPageIndex(updater.pageIndex);
        setPageSize(updater.pageSize);
      }
    },
    manualPagination: true,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <table className="min-w-full border">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border px-2 py-1">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border px-2 py-1">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex items-center gap-2 mt-4">
        <button
          className="px-2 py-1 border rounded"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Prev
        </button>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {table.getPageCount()}
          </strong>
        </span>
        <button
          className="px-2 py-1 border rounded"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
          className="ml-2 border rounded px-2 py-1"
        >
          {[5, 10, 20].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
