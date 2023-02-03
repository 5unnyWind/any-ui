import Menu from "./Menu";
import MenuItem from "./MenuItem";

export type MenuComponentType = typeof Menu & {
  Item: typeof MenuItem;
};

(Menu as MenuComponentType).Item = MenuItem;

export type { IMenuProps, MenuModeType, ClickParam } from "./Menu";
export type { IMenuItemProps } from "./MenuItem";

export default Menu as MenuComponentType;
