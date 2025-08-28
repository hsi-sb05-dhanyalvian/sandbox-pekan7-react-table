"use client";

import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type User = {
  id: number;
  name: string;
  email: string;
};

async function fetchUsers(page: number, pageSize: number) {
  const res = await axios.get(`https://dummyjson.com/users`, {
    params: { limit: pageSize, skip: (page - 1) * pageSize },
  });
  return { data: res.data.users, total: res.data.total };
}

export default function DataTable() {
  const [page, setPage] = React.useState(1);
  const pageSize = 10;

  const { data, isLoading } = useQuery({
    queryKey: ["users", page],
    queryFn: () => fetchUsers(page, pageSize),
    // keepPreviousData: true,
  });

  const columns = React.useMemo(
    () => [
      { header: "ID", accessorKey: "id" },
      { header: "Name", accessorKey: "firstName" },
      { header: "Email", accessorKey: "email" },
    ],
    []
  );

  const table = useReactTable({
    data: data?.data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, // 🔑 server-side pagination
    pageCount: data ? Math.ceil(data.total / pageSize) : -1,
  });

  return (
    <div className="p-4">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* Table */}
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              {table.getHeaderGroups().map((hg) => (
                <tr key={hg.id}>
                  {hg.headers.map((header) => (
                    <th key={header.id} className="border px-2 py-1 text-left">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="border-b">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-2 py-1">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex items-center gap-2 mt-4">
            <button
              onClick={() => setPage(1)}
              disabled={page === 1}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              First
            </button>
            <button
              onClick={() => setPage((old) => Math.max(1, old - 1))}
              disabled={page === 1}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span>
              Page <strong>{page}</strong> of{" "}
              {data ? Math.ceil(data.total / pageSize) : 1}
            </span>
            <button
              onClick={() =>
                setPage((old) =>
                  !data || page >= Math.ceil(data.total / pageSize) ? old : old + 1
                )
              }
              disabled={!data || page >= Math.ceil(data.total / pageSize)}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
            <button
              onClick={() => setPage(Math.ceil(data!.total / pageSize))}
              disabled={!data || page >= Math.ceil(data.total / pageSize)}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Last
            </button>
          </div>
        </>
      )}
    </div>
  );
}
