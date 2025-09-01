//- app/socials/posts/column.tsx

'use client';

import { ColumnDef } from "@tanstack/react-table";
import { Post } from "./type";
import { iconSize } from "@/app/column";
import { Eye, ThumbsDown, ThumbsUp } from "lucide-react";
import { NumberFormated } from "@/libs/util";

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
      const views = NumberFormated(row.original.views);
      return (
        <div className="table-icon-td">
          <Eye size={iconSize} />
          {views}
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
      const likes = NumberFormated(reactions.likes);
      const dislikes = NumberFormated(reactions.dislikes);
      
      return (
        <div>
          <div className="table-icon-td">
            <ThumbsUp size={iconSize} />
            <span>{likes}</span>
          </div>
          <div className="table-icon-td">
            <ThumbsDown size={iconSize} />
            <span>{dislikes}</span>
          </div>
        </div>
      );
    },
  },
];
