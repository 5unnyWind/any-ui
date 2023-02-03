import React, { useState, createContext } from "react";
import classNames from "classnames";

export type MenuModeType = "horizontal" | "vertical";

interface MenuPropsType {
  defaultOpenKeys: Array<string>;
  selectedKeys: Array<string>;
  mode: MenuModeType;
  className: string;
  style: Object;
  classPrefix: string;
  children: React.ReactNode;
  onClick: (params: ClickParam) => void; //点击
  onSelect: (params: ClickParam) => void; //选中
}

export type IMenuProps = Partial<MenuPropsType>;

//点击事件的参数类型
export type ClickParam = {
  key: string;
};

//menu的全局state类型
interface IMenuState {
  level: number;
  mode: MenuModeType;
  onClick: (params: ClickParam) => void;
  onSelect: (params: ClickParam) => void;
  selectedKeys: Array<string>;
}

export const MenuContext = createContext({});

/**
 * Menu组件
 * @param props
 * @returns
 */
const MenuCompontent: React.FC<IMenuProps> = (props) => {
  const {
    classPrefix,
    className,
    style,
    children,
    mode,
    selectedKeys,
    onClick: onClickFnc,
    onSelect: onSelectFnc,
    ...restProps
  } = props;

  //定义全局回调方法
  const onSelectCallBack = (params: ClickParam) => {
    useState({
      selectedKeys: [params.key],
    });

    if (onSelectFnc) {
      onSelectFnc(params);
    }
  };

  const onClickCallBack = (params: ClickParam) => {
    if (typeof onClickFnc === "function") {
      onClickFnc(params);
    }
  };

  //设置menu组件的全局状态对象
  const [context, setContext] = useState({
    selectedKeys: selectedKeys || [],
    mode: mode,
    level: 1,
    onClick: onClickCallBack,
    onSelect: onSelectCallBack,
  });

  return (
    <div
      className={classNames(className, `${classPrefix}-container`, {})}
      style={style}
      {...restProps}
    >
      <ul
        className={classNames(classPrefix, {
          [`${classPrefix}-vertical`]: mode === "vertical",
          [`${classPrefix}-horizontal`]: mode === "horizontal",
        })}
      >
        <MenuContext.Provider value={{ context, setContext }}>
          {children}
        </MenuContext.Provider>
      </ul>
    </div>
  );
};

MenuCompontent.defaultProps = {
  classPrefix: "ai-menu",
};

export default MenuCompontent;
