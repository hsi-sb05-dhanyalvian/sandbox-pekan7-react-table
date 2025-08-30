//- data/sidebar-menu.ts

import { MenuItem } from "@/types/menu";

export const Menus: MenuItem[] = [
  { icon: "dashboard", label: "Dashboard", path: "/" },
  // { icon: "analytics", label: "Analytics", path: "/analytics" },
  {
    icon: "manages",
    label: "Manages",
    path: "",
    submenu: [
      {
        icon: "products",
        label: "Products",
        path: "/manages/products",
      },
      {
        icon: "recipes",
        label: "Recipes",
        path: "/manages/recipes",
      },
      {
        icon: "users",
        label: "Users",
        path: "/manages/users",
      },
    ],
  },
  {
    icon: "socials",
    label: "Socials",
    path: "",
    submenu: [
      {
        icon: "posts",
        label: "Posts",
        path: "/socials/posts",
      },
      {
        icon: "comments",
        label: "Comments",
        path: "/socials/comments",
      },
      {
        icon: "quotes",
        label: "Quotes",
        path: "/socials/quotes",
      },
    ],
  },
  { icon: "settings", label: "Settings", path: "/settings" },
];
