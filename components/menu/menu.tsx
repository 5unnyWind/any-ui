import React, { ReactNode, useState, useEffect } from "react";
import MenuItem from "./menuItem";
import classNames from "classnames";
import { SubMenuProps } from "./subMenu";
import { MenuItemProps } from ".//menuItem";

export type MenuModeType = "vertical" | "horizontal" | "inline";

//菜单类型
interface MenuType {
  defaultOpenKeys?: string[]; //初始展开的 SubMenu 菜单项 key 数组
  defaultSelectedKey?: string; //初始选中的菜单项 key
  expandIcon?: ReactNode; //自定义展开图标
  mode?: MenuModeType; //菜菜单类型，现在支持垂直、水平、和内嵌模式三种
  theme?: MenuThemeType; //主题颜色
  inlineCollapsed: number[]; //inline 时菜单是否收起状态
  inlineIndent?: string; //inline 模式的菜单缩进宽度
  items: ItemType[]; //点击子菜单标题事件
  className: string; //
  onClick?: (key?: string) => void;
}

export type ItemType = Partial<SubMenuProps & MenuItemProps>;
export type MenuThemeType = "light" | "dark";
export type MenuProps = Partial<MenuType>;

const MenuCompontent: React.FC<MenuProps> = (props) => {
  const {
    defaultOpenKeys,
    defaultSelectedKey,
    expandIcon,
    mode,
    theme,
    inlineCollapsed,
    inlineIndent,
    items,
    className,
    onClick,
    ...restProps
  } = props;

  const classes = classNames(
    "menu",
    className,
    { [`menu-${mode}`]: mode },
    { [`menu-${theme}`]: theme }
  );

  //公共状态--选中的item的key
  const [selectedKey, setSelectedKey] = useState(
    items && items.length !== 0
      ? String(items[0].index)
      : String(defaultSelectedKey)
  );

  //获取子组件的key并更改
  const getSelectedKey = (index: string) => {
    //判断是否可以跳转
    const findItem = items?.find((item) => item.index === index);
    if (findItem?.disabled) return;

    //跳转
    setSelectedKey(index);
  };

  // 懒加载菜单的onClick事件
  useEffect(() => {
    onClick ? onClick(selectedKey) : "";
  }, [selectedKey]);

  return (
    <>
      <div className={classes} {...restProps}>
        {items?.map((item, p) => {
          let { index, ...res } = item;
          index = String(p);
          return (
            <div key={index} className="menu-item-box">
              <MenuItem
                selectedKey={selectedKey}
                getSelectedKey={getSelectedKey}
                {...res}
                index={index}
              />
            </div>
          );
        })}
      </div>
      {/* 下划线 */}
      <div className="menu-underline-box">
        <div
          className="menu-underline"
          style={{
            transform: `translateX(calc(600px / ${items?.length} * ${parseInt(
              selectedKey
            )}))`,
            width: `calc(100% / ${items?.length})`,
          }}
        ></div>
      </div>
    </>
  );
};

MenuCompontent.defaultProps = {
  defaultSelectedKey: "0",
};

export default MenuCompontent;
