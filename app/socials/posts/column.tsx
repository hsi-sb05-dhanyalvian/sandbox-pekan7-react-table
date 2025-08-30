//- app/socials/posts/column.tsx

'use client';

import { ColumnDef } from "@tanstack/react-table";
import { Post } from "./type";
import { iconSize, locale } from "@/app/column";
import { Eye, ThumbsDown, ThumbsUp } from "lucide-react";

export const columns: ColumnDef<Post>[] = [
  {
    accessorKey: "title",
    header: "Title",
    size: 360,
  },
  {
    accessorKey: "body",
    header: "Body",
    size: 0,
  },
  {
    accessorKey: "tags",
    header: "Tags",
    size: 180,
    enableSorting: false,
    cell: ({ row }) => {
      const tags = row.original.tags;
      return (
        <ul className="table-ul">
          {tags.map((item, idx) => (
            <li key={idx} className="table-ul-li">{item}</li>
          ))}
        </ul>
      );
    },
  },
  {
    accessorKey: "views",
    header: "Views",
    size: 120,
    cell: ({ row }) => {
      return (
        <div className="table-icon-td">
          <Eye size={iconSize} />
          {new Intl.NumberFormat(locale).format(row.original.views)}
        </div>
      );
    },
  },
  {
    accessorKey: "reactions",
    header: "Reactions",
    size: 120,
    enableSorting: false,
    cell: ({ row }) => {
      const reactions = row.original.reactions;
      return (
        <div>
          <div className="table-icon-td">
            <ThumbsUp size={iconSize} />
            <span>{new Intl.NumberFormat(locale).format(reactions.likes)}</span>
          </div>
          <div className="table-icon-td">
            <ThumbsDown size={iconSize} />
            <span>{new Intl.NumberFormat(locale).format(reactions.dislikes)}</span>
          </div>
        </div>
      );
    },
  },
];
