import React, { ReactNode } from "react";
import ClassNames from "classnames";
import MenuDivider from "./menuDivider";

import type { ItemType, MenuThemeType } from "./menu";

//子菜单类型
interface SubMenuType {
  disabled?: boolean; //是否禁用
  icon?: ReactNode; //菜单图标
  index?: string; //唯一标志
  label?: ReactNode; //菜单项标题
  children?: ItemType[]; //子菜单的菜单项
  theme?: MenuThemeType; //设置子菜单的主题，默认从 Menu 上继承
  popupOffset?: number[]; //子菜单偏移量，mode="inline" 时无效
  popupClassName?: string; //子菜单样式，mode="inline" 时无效
  onTitleClick?: (e: React.MouseEventHandler) => void; //点击子菜单标题事件
  isMenuSub?: boolean;
}

export type SubMenuProps = Partial<SubMenuType>;

const SubMenuCompontent: React.FC<SubMenuType> = (props) => {
  const { disabled, icon, index, label, children, isMenuSub, theme } = props;
  const classes = ClassNames(
    "sub-menu",
    { [`menu-${theme}`]: theme },
    { [`menu-isMenuSub`]: !isMenuSub }
  );
  console.log(isMenuSub);

  return (
    <>
      <ul className={classes}>
        {children?.map((item, p2) => {
          const { children: ch, isMenuSub, ...res } = item;
          return (
            <li key={p2} className="sub-menu-item">
              <MenuDivider icon={item.icon} />
              <span>{item.label}</span>
              {/* 判断子集 */}
              {ch && ch.length !== 0 ? (
                <SubMenuCompontent {...res} children={ch} isMenuSub={false} />
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

SubMenuCompontent.defaultProps = {
  isMenuSub: true,
};

export default SubMenuCompontent;
