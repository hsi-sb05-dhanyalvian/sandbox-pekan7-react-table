//- app/manages/recipes/column.tsx

'use client';

import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { Recipe } from "./type";
import {
  actionColumnHeader,
  actionColumnKey,
  actionColumnSize,
  ActionEdit,
  CellImage,
  CellRating,
  imageColumnSize,
  ratingColumnHeader,
  ratingColumnSize
} from "@/app/column";

export const columns: ColumnDef<Recipe>[] = [
  {
    accessorKey: "image",
    header: "Image",
    size: imageColumnSize,
    enableSorting: false,
    cell: ({ row }) => <CellImage src={row.original.image} alt={row.original.name} />,
  },
  {
    accessorKey: "name",
    header: "Name",
    size: 0,
    cell: ({ row }) => {
      const id = row.original.id;
      const name = row.original.name;
      return (
        <Link
          href={`/manages/recipes/${id}`}
          className="hover:underline hover:text-sky-600"
          title={`Detail of ${name}`}
        >
          {name}
        </Link>
      );
    },
  },
  {
    accessorKey: "cuisine",
    header: "Cuisine",
    size: 170,
  },
  {
    accessorKey: "difficulty",
    header: "Difficulty",
    size: 140,
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
    accessorKey: "mealType",
    header: "Meal Type",
    size: 170,
    enableSorting: false,
    cell: ({ row }) => {
      const mealType = row.original.mealType;
      return (
        <ul className="table-ul">
          {mealType.map((item, idx) => (
            <li key={idx} className="table-ul-li">{item}</li>
          ))}
        </ul>
      );
    },
  },
  {
    accessorKey: "ingredients",
    header: "Ingredients",
    size: 300,
    enableSorting: false,
    cell: ({ row }) => {
      const ingredients = row.original.ingredients;
      return (
        <ul className="table-ul">
          {ingredients.slice(0, 3).map((ingredient, idx) => (
            <li
              key={idx}
              className="table-ul-li"
              style={{ maxWidth: '300px' }}
            >
              {ingredient}
            </li>
          ))}
          {ingredients.length > 3 ? (<li key={99} className="opacity-75">others...</li>) : ''}
        </ul>
      );
    },
  },
  {
    accessorKey: actionColumnKey,
    header: actionColumnHeader,
    size: actionColumnSize,
    enableSorting: false,
    cell: ({ row }) => {
      return (
        <ActionEdit path={`/manages/users/${row.original.id}`} />
      );
    },
  },
];
