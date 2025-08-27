//- components/main-sidebar.tsx

"use client";

import { useState } from "react";
import { MenuIcon, SubMenuIcon } from "@/libs/menu-icon";
import { MenuItem } from "@/types/menu";
import { usePathname } from "next/navigation";

const menus: MenuItem[] = [
  { icon: "dashboard", label: "Dashboard", href: "/" },
  { icon: "analytics", label: "Analytics", href: "/analytics" },
  { icon: "manages", label: "Manages", href: "" },
  { icon: "settings", label: "Settings", href: "/settings" },
];

const MainSidebar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  // const [openManages, setOpenManages] = useState(false);

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold ml-2 mb-6">AdminPanel</h2>
      <ul className="space-y-2">
        {menus.map((menu) => (
          <li key={menu.label}>
            <MenuIcon icon={menu.icon} label={menu.label} href={menu.href} />
          </li>
        ))}
        {/* <li>
          <MenuIcon icon="dashboard" label="Dashboard" link="/" />
        </li>

        <li>
          <MenuIcon icon="analytics" label="Analytics" link="/analytics" />
        </li>

        <li>
          <MenuIcon
            icon="manages"
            label="Manages"
            submenu={true}
            onClick={() => setOpenManages(!openManages)}
            onClickVal={openManages}
          />

          {openManages && (
            <ul className="ml-9 mt-2 space-y-2 text-sm">
              <li>
                <SubMenuIcon icon="products" label="Products" link="/manages/products" />
              </li>
              <li>
                <SubMenuIcon icon="recipes" label="Recipes" link="/manages/recipes" />
              </li>
              <li>
                <SubMenuIcon icon="users" label="Users" link="/manages/users" />
              </li>
            </ul>
          )}
        </li>

        <li>
          <MenuIcon icon="settings" label="Settings" link="/" />
        </li> */}
      </ul>
    </aside>
  );
};

export default MainSidebar;
