import React from "react";
import classNames from "classnames";
import { NormalTypes } from "../_util/prop-types";

export type BadgeTypes = NormalTypes;

interface Props {
  type?: BadgeTypes;
  dot?: boolean;
  className?: string;
}

const defaultProps = {
  type: "default" as BadgeTypes,
  dot: false,
  className: "",
};

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export type BadgeProps = Props & NativeAttrs;

const BadgeComponent: React.FC<React.PropsWithChildren<BadgeProps>> = ({
  type,
  className,
  children,
  dot,
  ...props
}: BadgeProps & typeof defaultProps) => {
  const classes = classNames(
    "ai-badge",
    { 'ai-badge-dot':dot, [`ai-badge-${type}`]: type },
    className
  );
  return (
    <span className={classes} {...props}>
      {!dot ? children : `···`}
    </span>
  );
};
BadgeComponent.defaultProps = defaultProps;
BadgeComponent.displayName = "anyuiBadge";

export default BadgeComponent;
