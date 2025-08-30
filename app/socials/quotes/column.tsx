//- app/socials/quotes/column.tsx

'use client';

import { ColumnDef } from "@tanstack/react-table";
import { Quote } from "./type";

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
];
