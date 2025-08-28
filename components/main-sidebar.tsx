//- components/main-sidebar.tsx

"use client";

// import { useState } from "react";
import { MenuIcon } from "@/libs/menu-icon";
import { MenuItem } from "@/types/menu";
// import { usePathname } from "next/navigation";

const menus: MenuItem[] = [
  { icon: "dashboard", label: "Dashboard", href: "/" },
  { icon: "analytics", label: "Analytics", href: "/analytics" },
  { icon: "manages", label: "Manages", href: "" },
  { icon: "settings", label: "Settings", href: "/settings" },
];

const MainSidebar = () => {
  // const pathname = usePathname();
  // const [open, setOpen] = useState<string | null>(null);

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold ml-2 mb-6">AdminPanel</h2>
      <ul className="space-y-2">
        {menus.map((menu) => (
          <li key={menu.label}>
            <MenuIcon icon={menu.icon} label={menu.label} href={menu.href} />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default MainSidebar;
