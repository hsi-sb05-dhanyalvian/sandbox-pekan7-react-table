//- libs/menu-icon.tsx

import Link from "next/link";
import React from "react";
import {
  LayoutDashboard,
  Table2,
  Settings,
  ChevronDown,
  Barcode,
  CookingPot,
  Users,
  ChartNoAxesCombined,
  NotebookPen,
  MessageSquareText,
  Quote,
  Globe,
  QrCode,
  ScanBarcode,
  PackageOpen,
  PackageSearch
} from "lucide-react";

interface MenuIconProps {
  icon: string;
  label: string;
  path?: string;
  isActive: boolean;
  isOpen?: boolean;
  submenu?: boolean;
  onClick?: () => void;
};

export const MenuIcon = ({
  icon,
  label,
  path = '',
  isActive,
  isOpen = false,
  submenu = false,
  onClick,
}: MenuIconProps) => {
  const size = 20;

  if (!submenu) {
    return (
      <Link
        href={path}
        className={`flex items-center gap-2 p-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700 cursor-default' : 'cursor-pointer'}`}
      >
        <GetIcon icon={icon} size={size} />
        <span>{label}</span>
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-between p-2 rounded hover:bg-gray-700  transition-colors cursor-pointer"
    >
      <div className="flex items-center gap-2">
        <GetIcon icon={icon} size={size} />
        <span>{label}</span>
      </div>
      <ChevronDown
        size={18}
        className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
      />
    </button>
  );
};

interface SubMenuIconProps {
  icon: string;
  label: string;
  path?: string;
  isSubActive: boolean;
};

export const SubMenuIcon = ({ icon, label, path = '', isSubActive }: SubMenuIconProps) => {
  const size = 16;

  return (
    <Link
      href={path}
      className={`flex items-center gap-2 p-2 rounded hover:bg-gray-700 ${isSubActive ? 'bg-gray-700 cursor-default' : ''}`}
    >
      <GetIcon icon={icon} size={size} />
      <span>{label}</span>
    </Link>
  );
};

interface GetIconProps {
  icon: string;
  size: number;
}

const GetIcon = ({ icon, size }: GetIconProps) => {
  let result;

  switch (icon) {
    case 'dashboard':
      result = <LayoutDashboard size={size} />;
      break;
    case 'analytics':
      result = <ChartNoAxesCombined size={size} />;
      break;
    case 'manages':
      result = <Table2 size={size} />;
      break;
    case 'settings':
      result = <Settings size={size} />;
      break;
    case 'products':
      result = <PackageSearch size={size} />;
      break;
    case 'recipes':
      result = <CookingPot size={size} />;
      break;
    case 'users':
      result = <Users size={size} />;
      break;
    case 'socials':
      result = <Globe size={size} />;
      break;
    case 'posts':
      result = <NotebookPen size={size} />;
      break;
    case 'comments':
      result = <MessageSquareText size={size} />;
      break;
    case 'quotes':
      result = <Quote size={size} />;
      break;
  }

  return result;
};
