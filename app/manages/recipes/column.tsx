//- app/manages/recipes/column.tsx

'use client';

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Recipe } from "./type";

export const columns: ColumnDef<Recipe>[] = [
  {
    accessorKey: "name",
    header: "Name",
    size: 250,
    cell: ({ row }) => {
      const id = row.original.id;
      const name = row.original.name;
      return (
        <Link
          href={`/manages/recipes/${id}`}
          className="hover:underline hover:text-cyan-600"
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
  },
  {
    accessorKey: "difficulty",
    header: "Difficulty",
    size: 60,
  },
  {
    accessorKey: "mealType",
    header: "Meal Type",
    size: 100,
    cell: ({ row }) => {
      const mealType = row.original.mealType;
      return (
        <ul className="list-disc list-inside">
          {mealType.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
    },
  },
  {
    accessorKey: "ingredients",
    header: "Ingredients",
    size: 200,
    cell: ({ row }) => {
      const ingredients = row.original.ingredients;
      return (
        <ul className="list-disc list-inside">
          {ingredients.slice(0, 3).map((ingredient, idx) => (
            <li key={idx}>{ingredient}</li>
          ))}
          {ingredients.length > 3 ? (<li key={99} className="opacity-75">others...</li>) : ''}
        </ul>
      );
    },
  },
];
