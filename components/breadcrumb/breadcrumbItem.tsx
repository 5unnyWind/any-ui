import React, { MouseEventHandler } from "react";

import classnames from "classnames";

interface defaultBreadcrumbItemProps {
  className: string; //自定义类名
  href: string; //链接
  label: string;
  onClick: (e: MouseEventHandler<HTMLSpanElement>) => void;
}
type NativeBreadcrumbItemProps = defaultBreadcrumbItemProps &
  React.BaseHTMLAttributes<HTMLSpanElement>;

export type BreadcrumbItemProps = Partial<NativeBreadcrumbItemProps>;

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = (props) => {
  const { className, href, label, onClick } = props;

  const classes = classnames("breadcrumb", className);

  return (
    <>
      {href ? (
        <a className={classes} href={href}>
          {label}
        </a>
      ) : (
        <span className={classes} onClick={onClick}>
          {label}
        </span>
      )}
    </>
  );
};

BreadcrumbItem.defaultProps = {
  className: "breadcrumb-item",
  href: "",
  label: "路径",
  onClick: () => {
    alert(1);
  },
};

export default BreadcrumbItem;
