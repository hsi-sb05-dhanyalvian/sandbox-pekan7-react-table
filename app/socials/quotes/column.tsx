//- app/socials/quotes/column.tsx

'use client';

import { ColumnDef } from "@tanstack/react-table";
import { Quote } from "./type";
import {
  actionColumnHeader,
  actionColumnKey,
  actionColumnSize,
  ActionEdit,
} from "@/app/column";

export const columns: ColumnDef<Quote>[] = [
  {
    accessorKey: "quote",
    header: "Quote",
    size: 0,
  },
  {
    accessorKey: "author",
    header: "Author",
    size: 300,
  },
  {
    accessorKey: actionColumnKey,
    header: actionColumnHeader,
    size: actionColumnSize,
    enableSorting: false,
    cell: ({ row }) => {
      return <ActionEdit path={`/manages/users/${row.original.id}`} />
    },
  },
];
