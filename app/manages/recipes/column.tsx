//- app/manages/recipes/column.tsx

'use client';

import Link from "next/link";
import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import { Recipe } from "./type";
import { iconSize } from "@/app/column";
import { Star } from "lucide-react";

export const columns: ColumnDef<Recipe>[] = [
  {
    accessorKey: "image",
    header: "Image",
    size: 130,
    enableSorting: false,
    cell: ({ row }) => (
      <Image
        priority={true}
        src={row.original.image}
        alt={row.original.name}
        className="object-cover border border-stone-200 rounded-xl"
        width={72}
        height={72}
      />
    ),
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
    header: "Rating",
    size: 110,
    cell: ({ row }) => {
      const rating = row.original.rating;
      return (
        <div className="flex items-center gap-1">
          <Star size={iconSize} className="text-yellow-400" fill="gold" />
          <span>{rating}</span>
        </div>
      );
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
];
