//- components/table/tbody.tsx

import { ColumnDef, flexRender, Table } from "@tanstack/react-table";

interface TbodyProps<TData, TValue> {
  table: Table<TData>;
  columns: ColumnDef<TData, TValue>[];
  loading?: boolean;
}

const Tbody = <TData, TValue>({
  table,
  columns,
  loading
}: TbodyProps<TData, TValue>) => {
  return (
    <tbody>
      {loading ? (
        <tr>
          <td colSpan={columns.length} className="text-center px-3 py-3 first:pl-4 last:pr-4">
            <div className="flex justify-center items-center gap-2 min-h-72">
              <div className="w-5 h-5 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
              <span className="text-blue-500">Loading...</span>
            </div>
          </td>
        </tr>
      ) : table.getRowModel().rows.length > 0 ? (
        table.getRowModel().rows.map((row) => (
          <tr
            key={row.id}
            className="table-tr-td border-b border-b-stone-100 last:border-b-0">
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                className="px-3 py-2.5 first:pl-4 last:pr-4 align-top"
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={columns.length} className="text-center text-sm text-gray-500 px-3 py-4 first:pl-4 last:pr-4">
            No data found
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default Tbody;
