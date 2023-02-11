import React, {
  ReactNode,
  useState,
  useRef,
  useEffect,
  useContext,
} from "react";
import MenuItem from "./menuItem";
import classNames from "classnames";
import {
  ClickParams,
  MenuModeType,
  MenuThemeType,
  ItemType,
  MenuContext,
  ContextType,
} from "./index";

//菜单类型
interface MenuType {
  defaultOpenKeys?: string[]; //初始展开的 SubMenu 菜单项 key 数组
  defaultSelectedKey?: string; //初始选中的菜单项 key
  expandIcon?: ReactNode; //自定义展开图标
  mode?: MenuModeType; //菜菜单类型，现在支持垂直、水平、和内嵌模式三种
  theme?: MenuThemeType; //主题颜色
  inlineCollapsed?: number[]; //inline 时菜单是否收起状态
  inlineIndent?: string; //inline 模式的菜单缩进宽度
  items: ItemType[]; //点击子菜单标题事件
  className?: string; //
  onClick?: (key?: string) => void;
}

export type MenuProps = MenuType;

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

  const firstUpdate = useRef(true);
  // 懒加载菜单的onClick事件
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    } else {
      onClick ? onClick(selectedKey) : "";
    }
  }, [selectedKey]);

  const [context, setContext] = useState({
    mode: mode,
    selectedKey: selectedKey,
  });

  return (
    <>
      {/* <MenuContext.Provider value={{context, setContext}}> */}
      <div className={classes} {...restProps}>
        {items?.map((item, p) => {
          let { index, ...res } = item;
          index = String(index || p);
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
      {/* </MenuContext.Provider> */}
      {/* 下划线 */}
      {/* <div className="menu-underline-box">
        <div
          className="menu-underline"
          style={{
            transform: `translateX(calc(600px / ${items?.length} * ${parseInt(
              selectedKey
            )}))`,
            width: `calc(100% / ${items?.length})`,
          }}
        ></div>
      </div> */}
    </>
  );
};

MenuCompontent.defaultProps = {
  defaultSelectedKey: "0",
  mode: "horizontal",
};

export default MenuCompontent;
