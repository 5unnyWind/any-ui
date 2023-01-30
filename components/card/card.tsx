import React, { useState } from "react";
import classNames from "classnames";

export type cardSize = "default" | "small";

export interface Cardprops
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  className?: string;
  size?: cardSize; //控制组件大小
  title?: string; //传入的标题
  bordered?: boolean; //控制是否有边框
  headStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  children?: React.ReactNode;
  loading?: boolean;
}
const Card = React.forwardRef(
  (props: Cardprops, ref: React.Ref<HTMLDivElement>) => {
    console.log(props);
    const [hasborder, setborder] = useState(true);
    const {
      size,
      title,
      bordered = {},
      headStyle = {},
      bodyStyle,
      style,
      children,
      loading,
      ...others
    } = props;

    const card = classNames("ai-card");
    const headclass = classNames(
      "ai-card-head",
      hasborder ? "hasborder" : null,
      title ? null : "istitle"
    );
    const headwrapperclass = classNames("ai-card-head-wrapper");
    //    const headtitleclass=classNames()
    const headbody = classNames(
      title ? "ai-card-body" : "ai-card-notitle-body",
      hasborder ? "hasborder" : null
    );
    const body = (
      <div className={headbody} style={bodyStyle}>
        {children}
      </div>
    );
    return (
      <div className={card} style={style}>
        {/* head */}
        <div className={headclass}>
          <div className={headwrapperclass}>
            {title && <div style={headStyle}>{title}</div>}
          </div>
        </div>
        {/* body */}
        {body}
      </div>
    );
  }
);

export default Card;
