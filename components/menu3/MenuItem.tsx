import React, { useState, useContext } from "react";
import classNames from "classnames";
import { MenuModeType, ClickParam, MenuContext } from "./Menu";

interface MenuItemPropsType {
  index: string;
  disabled: boolean;
  mode: MenuModeType;
  className: string;
  style: Object;
  classPrefix: string;
  children: React.ReactNode;
  onClick: (params: ClickParam) => void;
  onSelect: (params: ClickParam) => void;
}

export type IMenuItemProps = Partial<MenuItemPropsType>;

const MenuItemCompontent: React.FC<IMenuItemProps> = ({
  classPrefix,
  className,
  index,
  style,
  disabled,
  children,
  ...restProps
}) => {
  //MenuItem的状态
  const [state, setState] = useState({
    expanded: false,
    isSelected: false,
  });

  //获取Menu的状态
  const { isSelected, expanded } = state;
  const a = useContext(MenuContext);

  // const menuItem = (
  //     <div
  //         className={classNames(`${classPrefix}-content`, {
  //             [`${classPrefix}-content-selected`]: isSelected,
  //             [`${classPrefix}-vertical-content`]: mode === 'vertical',
  //             [`${classPrefix}-horizontal-content`]: mode === 'horizontal'
  //         })}
  //         style={style}
  //     >
  //         {children}
  //     </div>
  // );

  return (
    // TODO: Tooltip is for inlineCollapsed, set visible to false tempararily
    // <li
    //     {...restProps}
    //     className={classNames(classPrefix, className, {
    //         [`${classPrefix}-vertical`]: mode === 'vertical',
    //         [`${classPrefix}-horizontal`]: mode === 'horizontal',
    //         [`${classPrefix}-vertical-selected`]: isSelected && mode === 'vertical',
    //         [`${classPrefix}-horizontal-selected`]: isSelected && mode === 'horizontal' && level === 1,
    //         [`${classPrefix}-disabled`]: disabled
    //     })}
    //     onClick={!disabled && this.onClickItem.bind(this)}
    // >
    //     <Tooltip
    //         visible={expanded}
    //         direction="right"
    //         message={menuItem}
    //         className={classNames(`${classPrefix}-tooltip`, {

    //         })}
    //         trigger="hover"
    //         showArrow={false}
    //     >
    //         {menuItem}
    //     </Tooltip>
    // </li>
    <></>
  );
};

MenuItemCompontent.defaultProps = {
  classPrefix: "ai-menu-item",
};

export default MenuItemCompontent;
