import React, { useState } from "react";
import Breadcrumb from "../breadcrumb";
import type { BreadcrumbProps } from "../index";

const App: React.FC = () => {
  const [size, setSize] = useState<BreadcrumbProps>({});

  const routes1 = [
    { label: "Home" },
    { label: "System" },
    { label: "Workplace" },
  ];
  const routes2 = [
    { label: "Home" },
    { label: "System", href: "https://www.baidu.com" },
    { label: "Workplace" },
  ];
  const routes3 = [
    { label: "Home", route: "/home" },
    { label: "System", route: "/system" },
    { label: "Workplace", route: "/workplace" },
  ];

  return (
    <>
      <div className="session">
        <h6>基本用法</h6>
        <Breadcrumb routes={routes1} />
      </div>
      <div className="session">
        <h6>自定义分割线</h6>
        <Breadcrumb routes={routes1} separator=">" />
        <Breadcrumb routes={routes1} separator="→" />
      </div>
      <div className="session">
        <h6>指向外链接</h6>
        <Breadcrumb routes={routes2} />
      </div>
      <div className="session">
        <h6>颜色类型</h6>
        <Breadcrumb routes={routes1} colorType="default" />
      </div>
      <div className="session">
        <h6>router绑定</h6>
        <Breadcrumb routes={routes3} />
      </div>
    </>
  );
};

export default App;
