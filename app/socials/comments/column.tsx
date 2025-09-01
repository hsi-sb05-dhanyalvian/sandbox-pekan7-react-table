//- app/socials/comments/column.tsx

'use client';

import { ColumnDef } from "@tanstack/react-table";
import { Comment } from "./type";
import { iconSize } from "@/app/column";
import { ThumbsUp } from "lucide-react";
import { NumberFormated } from "@/libs/util";

export const columns: ColumnDef<Comment>[] = [
  {
    accessorKey: "username",
    header: "Username",
    size: 240,
    cell: ({ row }) => {
      return row.original.user.username;
    },
  },
  {
    accessorKey: "fullname",
    header: "Fullname",
    size: 300,
    cell: ({ row }) => {
      return row.original.user.fullName;
    },
  },
  {
    accessorKey: "body",
    header: "Body",
    size: 0,
  },
  {
    accessorKey: "likes",
    header: "Likes",
    size: 100,
    cell: ({ row }) => {
      const likes = NumberFormated(row.original.likes);
      return (
        <div className="table-icon-td">
          <ThumbsUp size={iconSize} />
          <span>{likes}</span>
        </div>
      );
    },
  },
];
