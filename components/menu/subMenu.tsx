import React, { ReactNode, useState, useRef, useEffect } from "react";
import classNames from "classnames";
import MenuDivider from "./menuDivider";

import type { SubMenuProps, MenuThemeType } from "./index";

const SubMenuCompontent: React.FC<SubMenuProps> = (props) => {
  const { children, isMenuSub, theme, selectedKey, getSelectedKey, mode } =
    props;
  const classes = classNames(
    "menu-submenu",
    { [`menu-${theme}`]: theme },
    { [`menu-isMenuSub`]: !isMenuSub }
  );

  const [key, setKey] = useState("");

  const firstUpdate = useRef(true);
  // 懒加载菜单的onClick事件
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    } else {
      getSelectedKey ? getSelectedKey(key) : "";
    }
  }, [key]);

  return (
    <>
      <ul className={classes}>
        {children?.map((item, p) => {
          let { children: ch, index, isMenuSub, ...res } = item;
          index = String(index || p);
          return (
            <li
              key={index}
              className={classNames("menu-submenu-item", {
                [`${selectedKey === index ? "menu-submenu-selected" : ""}`]:
                  selectedKey,
                [`menu-submenu-${mode}`]: mode,
              })}
            >
              <div className={classNames(`menu-item-content`)}>
                <MenuDivider icon={item.icon} />
                <span
                  onClick={() => {
                    setKey(index ? index : "");
                  }}
                  className={classNames(`menu-item-text`)}
                >
                  {item.label}
                </span>
              </div>
              {/* 判断子集 */}
              {ch && ch.length !== 0 ? (
                <SubMenuCompontent
                  {...res}
                  children={ch}
                  isMenuSub={false}
                  getSelectedKey={getSelectedKey}
                />
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
