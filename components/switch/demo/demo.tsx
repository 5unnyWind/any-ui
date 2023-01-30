import React, { memo } from "react";
import Switch from "../switch";
import type { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const Demo: React.FC<IProps> = () => {
  return (
    <>
      <Switch>1</Switch>
    </>
  );
};

export default memo(Demo);
