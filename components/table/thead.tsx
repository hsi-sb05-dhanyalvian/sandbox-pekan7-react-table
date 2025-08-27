//- components/table/thead.tsx

import { flexRender, Table } from "@tanstack/react-table";

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
              className="px-3 py-3 font-bold first:pl-6 last:pr-6"
              // style={{ width: header.column.getSize() }}
              style={{ width: `${header.getSize()}px` }}
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
  );
};

export default Thead;
