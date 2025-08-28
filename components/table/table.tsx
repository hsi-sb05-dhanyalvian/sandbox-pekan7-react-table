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
  perPage: number;
  totalRows: number;
  currPage: number;
};

export function DataTable<TData, TValue>({
  columns,
  data,
  perPage,
  totalRows,
  currPage,
}: DataTableProps<TData, TValue>) {
  // const [pageIndex, setPageIndex] = useState(0);
  // const [pageSize, setPageSize] = useState([perPage]);
  
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  
  const [globalFilter, setGlobalFilter] = React.useState("");
  const handleGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(e.target.value);
  };
  const handleGlobalFilterClear = () => {
    setGlobalFilter("");
  };
  
  const [columnVisibility] = React.useState<VisibilityState>({});

  const table = useReactTable({
    data: data,
    columns: columns,
    state: {
      sorting,
      columnFilters,
      globalFilter,
      columnVisibility,
      // pagination: {
      //   pageIndex: 0,
      //   pageSize: 15,
      // }
    },
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: perPage,
      }
    },
    // defaultColumn: {
    //   size: 30,
    //   minSize: 30,
    //   maxSize: 400,
    // },
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    // onPaginationChange: () => {},
    manualPagination: true,
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-row gap-3 justify-between items-center">
        <GlobalSearch
          value={globalFilter}
          onChange={handleGlobalFilterChange}
          onClear={handleGlobalFilterClear}
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

          <Tbody table={table} />

          <Tfoot table={table} totalRows={totalRows}/>
        </table>
      </div>
    </div>
  );
}