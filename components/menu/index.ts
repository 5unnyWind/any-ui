import { createContext } from "react";

// 菜单模式
export type MenuModeType = "vertical" | "horizontal" | "inline";

// 全局共享参数类型
export type MenuContextType = {
  mode?: MenuModeType;
  selected?: string;
};

// export const MenuContext = createContext<MenuContextType>(null);

import Menu from "./menu";
import type { MenuProps, MenuThemeType, ItemType } from "./menu";
import MenuDivider from "./menuDivider";

export type ClickParams = {
  e: React.ReactDOM;
  index: string;
};

export type { MenuProps, MenuThemeType, ItemType };

export { MenuDivider };

export default Menu;
