import React from "react";

import classnames from "classnames";

import BreadcrumbItem from "./breadcrumbItem";

//单个路由信息定义
export type Route = {
  label: string;
  routeUrl: string;
  disabled: boolean;
};

//面包屑的传入参数定义
interface defaultBreadcrumbProps {
  itemRender: (
    route: Route,
    params: object,
    routes: Route[]
  ) => React.ReactNode; //自定义链接函数
  routes: Route[]; //路由信息组
  separator: React.ReactNode;
}

type NativeBreadcrumbProps = defaultBreadcrumbProps &
  React.BaseHTMLAttributes<HTMLElement>;

export type BreadcrumbProps = Partial<NativeBreadcrumbProps>;

const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  const { itemRender, routes, separator } = props;
  itemRender;
  return (
    <>
      {routes?.map((item, index) => {
        return (
          <>
            <BreadcrumbItem {...item} />
            {separator && index !== routes.length ? separator : ""}
          </>
        );
      })}
    </>
  );
};

Breadcrumb.defaultProps = {
  separator: false,
};

export default Breadcrumb;
