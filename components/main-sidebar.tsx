//- components/main-sidebar.tsx

"use client";

import { Menus } from "@/data/sidebar-menu";
import { MenuIcon, SubMenuIcon } from "@/libs/menu-icon";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const MainSidebar = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string[]>([]);
  const toggleMenu = (label: string) => {
    setOpenMenu((prev) =>
      prev.includes(label) ? prev.filter((m) => m !== label) : [...prev, label]
    );
  };

  useEffect(() => {
    Menus.forEach((menu) => {
      if (menu.submenu?.some((submenu) => submenu.path === pathname)) {
        setOpenMenu((prev) =>
          prev.includes(menu.label) ? prev : [...prev, menu.label]
        );
      }
    });
  }, [pathname]);

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold ml-2 mb-6">AdminPanel</h2>
      <ul className="space-y-2">
        {Menus.map((menu) => {
          const isActive = pathname === menu.path;
          const isOpen = openMenu.includes(menu.label);

          return (
            <li key={menu.label}>
              {menu.submenu ? (
                <>
                  <MenuIcon
                    icon={menu.icon}
                    label={menu.label}
                    submenu={true}
                    isActive={isActive}
                    isOpen={isOpen}
                    onClick={() => toggleMenu(menu.label)}
                  />

                  {isOpen && (
                    <ul className="ml-7 mt-2 space-y-2 text-sm">
                      {menu.submenu?.map((submenu) => {
                        const isSubActive = pathname === submenu.path;
                        return (
                          <li key={submenu.label}>
                            <SubMenuIcon
                              icon={submenu.icon}
                              label={submenu.label}
                              path={submenu.path}
                              isSubActive={isSubActive}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </>
              ) : (
                <MenuIcon
                  icon={menu.icon}
                  label={menu.label}
                  path={menu.path}
                  isActive={isActive}
                />
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default MainSidebar;
