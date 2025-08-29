//- types/menu.ts

interface Menu {
  icon: string;
  label: string;
  path?: string;
}

export interface MenuItem extends Menu {
  submenu?: Menu[];
};
