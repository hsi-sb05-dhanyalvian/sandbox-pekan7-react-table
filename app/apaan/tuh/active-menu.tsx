"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type MenuItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

const menu: MenuItem[] = [
  { label: "Dashboard", href: "/" },
  {
    label: "Users",
    children: [
      { label: "List", href: "/users" },
      { label: "Add New", href: "/users/new" },
    ],
  },
  {
    label: "Settings",
    children: [
      { label: "Profile", href: "/settings/profile" },
      { label: "Account", href: "/settings/account" },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="w-64 bg-gray-100 min-h-screen p-4">
      <ul className="space-y-2">
        {menu.map((item) => {
          const isParentActive =
            item.href === pathname ||
            item.children?.some((child) => child.href === pathname);

          return (
            <li key={item.label}>
              {item.href ? (
                <Link
                  href={item.href}
                  className={`block px-3 py-2 rounded ${
                    pathname === item.href
                      ? "bg-blue-500 text-white"
                      : "hover:bg-blue-100"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() =>
                      setOpen(open === item.label ? null : item.label)
                    }
                    className={`w-full text-left px-3 py-2 rounded ${
                      isParentActive ? "bg-blue-500 text-white" : "hover:bg-blue-100"
                    }`}
                  >
                    {item.label}
                  </button>
                  {open === item.label && item.children && (
                    <ul className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className={`block px-3 py-1 rounded ${
                              pathname === child.href
                                ? "bg-blue-400 text-white"
                                : "hover:bg-blue-100"
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
