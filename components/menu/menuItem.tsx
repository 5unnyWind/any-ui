import React, { ReactNode } from "react";

import ClassNames from "classnames";

import MenuDivider from "./menuDivider";

import { ItemType } from "./index";

import SubMenu from "./subMenu";
import classNames from "classnames";

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
    <div className={classes} {...rest}>
      <div className={classNames(`menu-item-content`)}>
        <MenuDivider icon={icon} />
        <span
          onClick={() => (getSelectedKey ? getSelectedKey(index) : "")}
          className={classNames(`menu-item-text`)}
        >
          {label}
        </span>
      </div>
      {/* 判断子集 */}
      {children && children.length !== 0 ? (
        <div className={classNames(`menu-item-submenu`)}>
          <SubMenu {...props} getSelectedKey={getSelectedKey} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

MenuItem.defaultProps = {};

export default MenuItem;
