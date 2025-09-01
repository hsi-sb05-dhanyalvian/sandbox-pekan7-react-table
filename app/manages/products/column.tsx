//- app/manages/products/column.tsx

import { Product } from "./type";
import {
  actionColumnHeader,
  actionColumnKey,
  actionColumnSize,
  ActionEdit,
  CellImage,
  CellRating,
  iconSize,
  imageColumnSize,
  ratingColumnHeader,
  ratingColumnSize,
} from "@/app/column";
import { NumberFormated } from "@/libs/util";
import { ColumnDef } from "@tanstack/react-table";
import { PackageCheck, PackageMinus, PackageX } from "lucide-react";

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "thumbnail",
    header: "Image",
    size: imageColumnSize,
    enableSorting: false,
    cell: ({ row }) => (
      <CellImage src={row.original.thumbnail} alt={row.original.title} />
    ),
  },
  {
    accessorKey: "title",
    header: "Name",
    size: 0,
    cell: ({ row }) => {
      return (
        <div>
          <div>{row.original.title}</div>
          <div>SKU: {row.original.sku}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "brand",
    header: "Brand",
    size: 200,
    cell: ({ row }) => {
      return (row.original.brand ?? '-');
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    size: 200,
    cell: ({ row }) => {
      return (
        <span className="capitalize">{row.original.category}</span>
      );
    },
  },
  {
    accessorKey: "stock",
    header: "Stock",
    size: 130,
    enableSorting: false,
    cell: ({ row }) => {
      const stock = NumberFormated(row.original.stock);
      const status = row.original.availabilityStatus;
      let badge;
      let icon;

      switch (status) {
        case 'In Stock':
          badge = 'badge-3';
          icon = <PackageCheck size={iconSize} />;
          break;
        case 'Low Stock':
          badge = 'badge-4';
          icon = <PackageMinus size={iconSize} />;
          break;
        case 'Out of Stock':
          badge = 'badge-1';
          icon = <PackageX size={iconSize} />;
          break;
      }

      return (
        <div>
          <div className="table-icon-td">
            {icon}
            <span>{stock}</span>
          </div>
          <div className={`${badge} px-2 py-0.5 mt-1 capitalize`}>
            {status}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "tags",
    header: "Tags",
    size: 180,
    enableSorting: false,
    cell: ({ row }) => {
      const rows = row.original.tags;
      return (
        <ul className="table-ul">
          {rows.map((row, idx) => (
            <li key={idx} className="table-ul-li">{row}</li>
          ))}
        </ul>
      );
    },
  },
  {
    accessorKey: "rating",
    header: ratingColumnHeader,
    size: ratingColumnSize,
    cell: ({ row }) => {
      return <CellRating rating={row.original.rating} />;
    },
  },
  {
    accessorKey: actionColumnKey,
    header: actionColumnHeader,
    size: actionColumnSize,
    enableSorting: false,
    cell: ({ row }) => {
      return <ActionEdit path={`/manages/products/${row.original.id}`} />
    },
  },
];
