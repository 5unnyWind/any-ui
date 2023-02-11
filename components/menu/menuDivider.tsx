import React from "react";

interface MenuDividerType {
  icon?: React.ReactNode;
}

export type MenuDividerProps = Partial<MenuDividerType>;

const menuDivider: React.FC<MenuDividerProps> = ({ icon }) => {
  return <span className="menu-divider">{icon}</span>;
};

export default menuDivider;
