import React, { useState, useRef, useEffect } from "react";
import MenuItem from "./menuItem";
import classNames from "classnames";
import { MenuProps } from "./index";

const MenuCompontent: React.FC<MenuProps> = (props) => {
  const {
    defaultOpenKeys,
    defaultSelectedKey,
    expandIcon,
    mode,
    theme,
    items,
    className,
    width,
    style,
    onClick,
    ...restProps
  } = props;

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

  return (
    <>
      <div
        className={classNames(
          "ai-menu",
          className,
          { [`ai-menu-${mode}`]: mode },
          { [`ai-menu-${theme}`]: theme }
        )}
        style={mode === "vertical" ? { width: width + "px" } : {}}
        {...restProps}
      >
        {items?.map((item, p) => {
          let { index, ...res } = item;
          index = String(index || p);
          return (
            <div key={index} className="ai-menu-item-box">
              <MenuItem
                selectedKey={selectedKey}
                getSelectedKey={getSelectedKey}
                {...res}
                mode={mode}
                index={index}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

MenuCompontent.defaultProps = {
  defaultSelectedKey: "0",
  mode: "horizontal",
  expandIcon: "📝",
};

export default MenuCompontent;
