import React from "react";
import { pickChild } from "../_util/collections";
import { tuple } from "../_util/prop-types";
import Badge from "./badge";

const placement = tuple("topLeft", "topRight", "bottomLeft", "bottomRight");
export type BadgeAnchorPlacement = (typeof placement)[number];

interface Props {
  placement?: BadgeAnchorPlacement;
  className?: string;
}

const defaultProps = {
  placement: "topRight" as BadgeAnchorPlacement,
  className: "",
};

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export type BadgeAnchorProps = Props & NativeAttrs;

const BadgeAnchor: React.FC<React.PropsWithChildren<BadgeAnchorProps>> = ({
  children,
  placement,
}: BadgeAnchorProps & typeof defaultProps) => {
  const [withoutBadgeChildren, badgeChldren] = pickChild(children, Badge);

  return (
    <div className="ai-badge-anchor">
      {withoutBadgeChildren}
      <sup className={`ai-sup-${placement}`}>{badgeChldren}</sup>
    </div>
  );
};

BadgeAnchor.defaultProps = defaultProps;
BadgeAnchor.displayName = "AnyuiBadgeAnchor";
export default BadgeAnchor;
