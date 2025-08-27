//- types/menu.ts

interface Menu {
  icon: string;
  label: string;
  href?: string;
}

export interface MenuItem extends Menu {
  submenu?: Menu[];
};
