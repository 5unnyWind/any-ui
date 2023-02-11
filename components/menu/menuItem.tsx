import React, { useContext } from "react";
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
    mode,
    ...restProps
  } = props;

  return (
    <div
      {...restProps}
      className={ClassNames("menu-item", {
        [`menu-disabled`]: disabled,
        [`menu-item-${mode}`]: mode,
        [`${selectedKey === index ? "menu-item-selected" : ""}`]: selectedKey,
      })}
    >
      <div
        className={classNames(`menu-item-content`)}
        onClick={() => (getSelectedKey ? getSelectedKey(index) : "")}
      >
        <MenuDivider icon={icon} />
        <span className={classNames(`menu-item-text`)}>{label}</span>
        {mode !== "horizontal" && children && children.length !== 0 && (
          <div className="menu-item-status">→</div>
        )}
      </div>
      {/* 判断子集 */}
      {children && children.length !== 0 ? (
        <div className={classNames(`menu-item-submenu`)}>
          <SubMenu
            {...props}
            mode={mode}
            selectedKey={selectedKey}
            getSelectedKey={getSelectedKey}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

MenuItem.defaultProps = {};

export default MenuItem;
