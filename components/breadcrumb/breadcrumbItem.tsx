import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import type { Route } from "./breadcrumb";

interface defaultBreadcrumbItemProps {
  className: string; //自定义类名
  href: string; //链接
  label: string;
  route: string;
  disabled: boolean;
  last?: boolean;
  routes?: Partial<Route>[];
}
type NativeBreadcrumbItemProps = defaultBreadcrumbItemProps &
  React.BaseHTMLAttributes<HTMLSpanElement>;

export type BreadcrumbItemProps = Partial<NativeBreadcrumbItemProps>;

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = (props) => {
  const { className, href, label, route, disabled, last, routes } = props;

  const classes = classnames("ai-bcb-item", className, {
    disabled,
    [`ai-bcb-link`]: href,
  });

  // 路由地址链接
  let path = "";
  if (last && route) routes?.forEach((item) => (path += item.route));

  return (
    <>
      {href ? (
        <a className={classes} href={href}>
          {label}
        </a>
      ) : (
        <Link className={classes} to={path}>
          {label}
        </Link>
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
