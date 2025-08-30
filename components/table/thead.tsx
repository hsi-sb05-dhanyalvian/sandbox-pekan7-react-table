//- components/table/thead.tsx

import { flexRender, Table } from "@tanstack/react-table";
import { ArrowDownAZ, ArrowDownZA, ArrowUpAZ, ArrowUpDown } from "lucide-react";

interface TheadProps<TData> {
  table: Table<TData>;
}

const Thead = <TData,>({ table }: TheadProps<TData>) => {
  return (
    <thead className="bg-teal-50">
      {table.getHeaderGroups().map((headerGroup) => (
        <tr
          key={headerGroup.id}
          className="border-b border-b-stone-200 rounded-xl"
        >
          {headerGroup.headers.map((header) => (
            <th
              key={header.id}
              className={`px-3 py-3 first:pl-4 last:pr-4 font-semibold ${header.column.getCanSort() ? 'cursor-pointer' : ''}`}
              style={header.getSize() > 5 ? { width: `${header.getSize()}px` } : undefined}
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
                {header.column.getCanSort() && (
                  <span>
                    {header.column.getIsSorted()
                      ? header.column.getIsSorted() === "asc"
                        ? <ArrowUpAZ size={14} className="text-sky-600" />
                        : <ArrowDownAZ size={14} className="text-sky-600" />
                      : header.column.getCanSort()
                        ? <ArrowUpDown size={14} className="text-stone-300" />
                        : ''}
                  </span>
                )}
              </div>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default Thead;
