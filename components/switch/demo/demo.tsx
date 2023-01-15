import React, { memo } from "react";
import Switch from "../switch";
import type { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const Demo: React.FC<IProps> = () => {
  return (
    <>
      <Switch></Switch>
    </>
  );
};

export default memo(Demo);
