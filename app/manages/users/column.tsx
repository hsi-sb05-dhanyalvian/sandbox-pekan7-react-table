//- app/manages/users/column.tsx

import { ColumnDef } from "@tanstack/react-table";
import { User } from "./type";
import {
  actionColumnHeader,
  actionColumnSize,
  ActionEdit,
  CellImage,
  iconSize,
  imageColumnSize,
} from "@/app/column";
import {
  ChevronsLeftRightEllipsis,
  Droplet,
  Mail,
  Mars,
  Phone,
  Venus,
} from "lucide-react";
import { CalculateAge, DateFormated } from "@/libs/util";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "photo",
    header: "Photo",
    size: imageColumnSize,
    enableSorting: false,
    cell: ({ row }) => (
      <CellImage src={row.original.image} alt={row.original.username} />
    ),
  },
  {
    accessorKey: "firstName",
    header: "Name",
    size: 0,
    cell: ({ row }) => {
      let name = row.original.firstName;
      const username = row.original.username;

      if (row.original.lastName) {
        name += ' ' + row.original.lastName;
      }

      return (
        <div>
          <div>{name}</div>
          <div>@{username}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "gender",
    header: "Gender",
    size: 130,
    cell: ({ row }) => {
      const gender = row.original.gender;
      return (
        <div className="flex items-center gap-1">
          {gender == 'male'
            ? <Mars size={iconSize} color="blue" />
            : <Venus size={iconSize} color="red" />
          }
          <span className="capitalize">{gender}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "birthDate",
    header: "Date of Birth",
    size: 150,
    cell: ({ row }) => {
      const date = row.original.birthDate;
      const age = CalculateAge(date);

      return (
        <div>
          <div className="capitalize">{DateFormated(date)}</div>
          <div>{age} years</div>
        </div>
      );
    },
  },
  {
    accessorKey: "contacts",
    header: "Contacts",
    size: 320,
    enableSorting: false,
    cell: ({ row }) => {
      const phone = row.original.phone;
      const email = row.original.email;
      
      return (
        <div>
          <div className="table-icon-td">
            <Phone size={iconSize} />
            <span>{phone}</span>
          </div>
          <div className="table-icon-td">
            <Mail size={iconSize} />
            <span>{email}</span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "data",
    header: "Data",
    size: 140,
    enableSorting: false,
    cell: ({ row }) => {
      const bloodGroup = row.original.bloodGroup;
      const height = row.original.height;
      const weight = row.original.weight;

      return (
        <div>
          <div className="table-icon-td">
            <Droplet size={iconSize} fill="red" color="red" />
            <div>{bloodGroup}</div>
          </div>
          <div className="table-icon-td">
            <ChevronsLeftRightEllipsis size={iconSize} className="rotate-90" />
            <div>{height} <span className="font-2xs">cm</span></div>
          </div>
          <div className="table-icon-td">
            <ChevronsLeftRightEllipsis size={iconSize} />
            <div>{weight} <span className="font-2xs">kg</span></div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "role",
    header: "Role",
    size: 130,
    cell: ({ row }) => {
      const role = row.original.role;
      let badge;

      switch (role) {
        case 'admin':
          badge = 'badge-2';
          break;
        case 'moderator':
          badge = 'badge-3';
          break;
        default:
          badge = 'badge-1';
      }

      return (
        <span className={`${badge} px-2 py-0.5 capitalize`}>{role}</span>
      );
    },
  },
  {
    accessorKey: "action",
    header: actionColumnHeader,
    size: actionColumnSize,
    enableSorting: false,
    cell: ({ row }) => {
      return <ActionEdit path={`/manages/users/${row.original.id}`} />
    },
  },
];
