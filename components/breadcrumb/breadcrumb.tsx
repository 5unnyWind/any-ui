import React from "react";
import BreadcrumbItem from "./breadcrumbItem";
import BreadcrumSeparator from "./breadcrumSeparator";

import classnames from "classnames";

type ColorType = "black" | "default";

//单个路由信息定义
export type Route = {
  label?: string; //路由文字
  route?: string; //路由路径
  disabled?: boolean; //是否可以点击,
  href?: string; //外链接
};

//面包屑的传入参数定义
interface defaultBreadcrumbProps {
  routes?: Partial<Route>[]; //路由信息组
  separator?: string;
  className?: string;
  colorType?: ColorType;
}

type NativeBreadcrumbProps = defaultBreadcrumbProps &
  React.BaseHTMLAttributes<HTMLElement>;

export type BreadcrumbProps = Partial<NativeBreadcrumbProps>;

const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  const { routes, colorType, separator, className } = props;

  const classes = classnames("bcb", className, {
    [`bcb-${colorType}`]: colorType,
  });

  return (
    <>
      <div className={classes}>
        {routes?.map((item, index) => {
          return (
            <span key={index}>
              <BreadcrumbItem {...item} />
              {index !== routes.length - 1 ? (
                <BreadcrumSeparator separator={separator} />
              ) : (
                ""
              )}
            </span>
          );
        })}
      </div>
    </>
  );
};

Breadcrumb.defaultProps = {
  separator: "/",
  routes: [
    {
      label: "首页",
      route: "#",
      disabled: false,
      href: "",
    },
  ],
};

export default Breadcrumb;
