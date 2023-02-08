import React from "react";

interface MenuDividerType {
  icon?: React.ReactNode;
}

export type MenuDividerProps = Partial<MenuDividerType>;

const menuDivider: React.FC<MenuDividerProps> = (props) => {
  const { icon } = props;
  return (
    <>
      <span className="menu-divider">{icon}</span>
    </>
  );
};

menuDivider.defaultProps = {
  icon: "",
};

export default menuDivider;
