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
      className={ClassNames("ai-menu-item", {
        [`ai-menu-disabled`]: disabled,
        [`ai-menu-item-${mode}`]: mode,
        [`${selectedKey === index ? "ai-menu-item-selected" : ""}`]:
          selectedKey,
      })}
    >
      <div
        className={classNames(`ai-menu-item-content`)}
        onClick={() => (getSelectedKey ? getSelectedKey(index) : "")}
      >
        <MenuDivider icon={icon} />
        <span className={classNames(`ai-menu-item-text`)}>{label}</span>
        {mode !== "horizontal" && children && children.length !== 0 && (
          <div className="ai-menu-item-status">＞</div>
        )}
      </div>
      {/* 判断子集 */}
      {children && children.length !== 0 ? (
        <div className={classNames(`ai-menu-item-submenu`)}>
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
