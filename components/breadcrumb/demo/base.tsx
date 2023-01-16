import React, { useState } from "react";
import Breadcrumb from "../breadcrumb";
import type { BreadcrumbProps } from "../index";

const App: React.FC = () => {
  const [size, setSize] = useState<BreadcrumbProps>({});

  const routes = [
    {
      label: "首页",
      route: "/home",
      disabled: false,
      className: "hah",
    },
    {
      label: "面板",
      route: "/workplace",
      href: "https://www.baidu.com",
    },
    {
      label: "主页",
      route: "/2131",
      disabled: true,
    },
    {
      label: "主页",
      route: "/2131",
    },
  ];

  const data: BreadcrumbProps = {
    routes: routes,
  };

  return (
    <>
      <Breadcrumb routes={routes} separator="/" />
    </>
  );
};

export default App;
