import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import Calendar from "../calendar";

interface IProps {
  children?: ReactNode;
}

const Template: FC<IProps> = () => {
  return (
    <>
      <Calendar year={2020} monthIndex={8} />
    </>
  );
};

export default memo(Template);
