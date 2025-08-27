//- components/table/tbody.tsx

import { flexRender, Table } from "@tanstack/react-table";

interface TbodyProps<TData> {
  table: Table<TData>;
}

const Tbody = <TData,>({ table }: TbodyProps<TData>) => {
  return (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr
          key={row.id}
          className="bg-white hover:bg-teal-50 border-b border-b-stone-100 last:border-b-0">
          {row.getVisibleCells().map((cell) => (
            <td
              key={cell.id}
              className="px-3 py-2.5 first:pl-6 last:pr-6 align-top"
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default Tbody;
