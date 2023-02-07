import React, { memo } from "react";
import Switch from "../switch";
import type { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const Demo: React.FC<IProps> = () => {
  return (
    <>
      <Switch
        width={"40"}
        activeValue={"1"}
        inactiveValue={"2"}
        // activeColor={""}
        // inactiveColor={""}
        defaultChecked={true}
      ></Switch>
    </>
  );
};

export default memo(Demo);
