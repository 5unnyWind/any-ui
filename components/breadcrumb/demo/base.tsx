import React, { useState } from "react";
import Breadcrumb from "../breadcrumb";
import BreadcrumbItem from "../breadcrumbItem";
import type { BreadcrumbProps } from "../index";
import type { Route } from "../breadcrumb";

const App: React.FC = () => {
  const [size, setSize] = useState<BreadcrumbProps>({});

  const routes: Route[] = [
    {
      label: "首页",
      routeUrl: "/home",
      disabled: false,
    },
    {
      label: "面板",
      routeUrl: "/workplace",
      disabled: false,
    },
  ];

  const data: BreadcrumbProps = {
    routes: routes,
  };

  return (
    <>
      <BreadcrumbItem />
    </>
  );
};

export default App;
