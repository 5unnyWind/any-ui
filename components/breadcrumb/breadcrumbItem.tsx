import React, { MouseEventHandler } from "react";

import classnames from "classnames";

interface defaultBreadcrumbItemProps {
  className: string; //自定义类名
  href: string; //链接
  label: string;
  route: string;
  disabled: boolean;
}
type NativeBreadcrumbItemProps = defaultBreadcrumbItemProps &
  React.BaseHTMLAttributes<HTMLSpanElement>;

export type BreadcrumbItemProps = Partial<NativeBreadcrumbItemProps>;

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = (props) => {
  const { className, href, label, route, disabled } = props;

  const classes = classnames("breadcrumb-item", className, { disabled });

  const indexUrl = (route: string) => {
    return () => {
      // if(route) navigate(route)
      // alert('你已跳转到页面：'  + route)
    };
  };

  return (
    <>
      {href ? (
        <a className={classes} href={href}>
          {label}
        </a>
      ) : (
        <span className={classes} onClick={() => indexUrl(route || "")}>
          {label}
        </span>
      )}
    </>
  );
};

BreadcrumbItem.defaultProps = {
  className: "",
  href: "",
  label: "路径",
};

export default BreadcrumbItem;
