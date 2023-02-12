import React, { ReactNode } from "react";

/**
 * 菜单全局类型
 */

// 菜单模式类型
export type MenuModeType = "vertical" | "horizontal" | "inline";

//菜单主题类型
export type MenuThemeType = "light" | "dark";

//菜单类型
interface MenuType {
  defaultOpenKeys?: string[]; //初始展开的 SubMenu 菜单项 key 数组
  defaultSelectedKey?: string; //初始选中的菜单项 key
  expandIcon?: ReactNode; //自定义展开图标
  mode?: MenuModeType; //菜菜单类型，现在支持垂直、水平、和内嵌模式三种
  theme?: MenuThemeType; //主题颜色
  inlineCollapsed?: number[]; //inline 时菜单是否收起状态
  inlineIndent?: string; //inline 模式的菜单缩进宽度
  items?: ItemType[]; //点击子菜单标题事件
  className?: string; //
  onClick?: (key?: string) => void;
}

//菜单的props
export type MenuProps = Partial<MenuType>;

/**
 * 菜单项
 */

//菜单项类型
interface MenuItemType {
  disabled?: boolean; //是否禁用
  icon?: ReactNode; //菜单图标
  index?: string; //item 的唯一标志
  label?: ReactNode; //菜单项标题
  title?: string; //设置收缩时展示的悬浮标题
  selectedKey?: string; //是否选中
  getSelectedKey?: (index?: string) => void | null;
  mode?: MenuModeType;
}

//MenuItem的props
export type MenuItemProps = Partial<MenuItemType>;

/**
 * 子菜单
 */

//子菜单类型
interface SubMenuType {
  disabled?: boolean; //是否禁用
  icon?: ReactNode; //菜单图标
  index?: string; //唯一标志
  label?: ReactNode; //菜单项标题
  children?: ItemType[]; //子菜单的菜单项
  theme?: MenuThemeType; //设置子菜单的主题，默认从 Menu 上继承
  onTitleClick?: (e: React.MouseEventHandler) => void; //点击子菜单标题事件
  isMenuSub?: boolean;
  selectedKey: string;
  getSelectedKey?: (index?: string) => void | null;
  mode?: MenuModeType;
}

//SubMenu的props
export type SubMenuProps = Partial<SubMenuType>;

//菜单子项类型：可能为子菜单也可能为子项
export type ItemType = Partial<SubMenuProps & MenuItemProps>;

import Menu from "./menu";
import MenuDivider from "./menuDivider";

export type ClickParams = {
  e: React.ReactDOM;
  index: string;
};

export { MenuDivider };

export default Menu;
