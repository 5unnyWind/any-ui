import React, { ReactNode } from "react";

import ClassNames from "classnames";

import MenuDivider from "./menuDivider";

import { ItemType } from "./index";

import SubMenu from "./subMenu";

//菜单项类型
interface MenuItemType {
  disabled?: boolean; //是否禁用
  icon?: ReactNode; //菜单图标
  index?: string; //item 的唯一标志
  label?: ReactNode; //菜单项标题
  title?: string; //设置收缩时展示的悬浮标题
  selectedKey?: string; //是否选中
  getSelectedKey?: (index?: string) => void | null;
}

export type MenuItemProps = Partial<MenuItemType>;

const MenuItem: React.FC<ItemType> = (props) => {
  const {
    disabled,
    icon,
    index,
    label,
    title,
    selectedKey,
    getSelectedKey,
    children,
    ...rest
  } = props;

  const classes = ClassNames("menu-item", {
    [`menu-disabled`]: disabled,
    [`${selectedKey === index ? "menu-selected" : ""}`]: selectedKey,
  });

  return (
    <>
      {/* 菜单导航 */}
      <div
        className={classes}
        {...rest}
        onClick={() => (getSelectedKey ? getSelectedKey(index) : "")}
      >
        <MenuDivider icon={icon} />
        <span>{label}</span>
      </div>
      {/* 判断子集 */}
      {children && children.length !== 0 ? (
        <SubMenu {...props} getSelectedKey={getSelectedKey} />
      ) : (
        ""
      )}
    </>
  );
};

MenuItem.defaultProps = {};

export default MenuItem;
