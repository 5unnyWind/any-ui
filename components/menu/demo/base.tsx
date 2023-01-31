import React, { useState } from "react";
import type { MenuProps } from "../index";
import Menu from "../index";
import "./base.scss";

const items1 = [
  {
    label: "主页",
    index: "0",
  },
  {
    label: "邮箱",
    index: "1",
  },
  {
    label: "更多咨询",
    index: "2",
  },
  {
    label: "友链",
    index: "3",
  },
];

const items2 = [
  {
    label: "主页",
    index: "0",
  },
  {
    label: "邮箱",
    index: "1",
    disabled: true,
  },
  {
    label: "更多咨询",
    index: "2",
  },
  {
    label: "友链",
    index: "3",
  },
];

const items3 = [
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        点我百度
      </a>
    ),
    index: "0",
    icon: "",
  },
  {
    label: "邮箱",
    index: "1",
    icon: "",
  },
  {
    label: "更多咨询",
    index: "2",
    icon: "",
  },
  {
    label: "友链",
    index: "3",
    icon: "",
  },
];

const items4 = [
  {
    label: "主页",
    index: "0",
    icon: "$",
  },
  {
    label: "邮箱",
    index: "1",
    icon: "$",
  },
  {
    label: "更多咨询",
    index: "2",
    icon: "$",
  },
  {
    label: "友链",
    index: "3",
    icon: "$",
  },
];

const items5 = [
  {
    label: "导航1",
    index: "mail",
    children: [
      {
        type: "group",
        label: "子菜单1",
        icon: "$",
        children: [
          {
            label: "子菜单1-1",
            index: "setting:1",
          },
          {
            label: "子菜单1-2",
            index: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "子菜单2",
        icon: "$",
        children: [
          {
            label: "子菜单2-1",
            index: "setting:3",
          },
          {
            label: "子菜单2-2",
            index: "setting:4",
            children: [
              {
                type: "group",
                label: "子菜单1",
                icon: "$",
                children: [
                  {
                    label: "子菜单1-1",
                    index: "setting:1",
                  },
                  {
                    label: "子菜单1-2",
                    index: "setting:2",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "导航2",
    index: "app",
    icon: "",
    disabled: true,
  },
  {
    label: "导航3",
    index: "SubMenu",
    icon: "&",
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        链接4
      </a>
    ),
    key: "alipay",
  },
];

const items7 = [
  {
    label: "主页",
    index: "/home",
  },
  {
    label: "邮箱",
    index: "/email",
  },
  {
    label: "更多咨询",
    index: "/more",
  },
  {
    label: "友链",
    index: "/friend",
  },
];

const App: React.FC = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <div>
      <h2 style={{ marginLeft: "40px" }}>菜单</h2>
      <p style={{ marginLeft: "40px" }}>菜单组件演示，以下中&，￥，$为图标</p>

      <div className="containerStyle">
        <div className="sessionStyle">
          <div className="style1">
            <h3 className="h3Style">1，基本用法</h3>
            <Menu items={items1} />
          </div>
        </div>

        <div className="sessionStyle">
          <div className="style1">
            <h3 className="h3Style">2，禁止点击跳转</h3>
            <Menu items={items2} />
          </div>
        </div>

        <div className="sessionStyle">
          <div className="style1">
            <h3 className="h3Style">3，含链接菜单</h3>
            <Menu items={items3} />
          </div>
        </div>

        <div className="sessionStyle">
          <div className="style1">
            <h3 className="h3Style">4，菜单图标自定义</h3>
            <Menu items={items4} />
          </div>
        </div>

        <div className="sessionStyle">
          <div className="style1">
            <h3 className="h3Style">5，点击事件</h3>
            <Menu items={items4} onClick={onClick} />
          </div>
        </div>

        <div className="sessionStyle">
          <div className="style1">
            <h3 className="h3Style">6，子菜单</h3>
            <Menu items={items5} onClick={onClick} />
          </div>
        </div>

        <div className="sessionStyle">
          <div className="style1">
            <h3 className="h3Style">
              7，指定index路由（在onClick事件中，没有实现路由跳转）
            </h3>
            <Menu items={items7} onClick={onClick} />
          </div>
        </div>

        <div className="sessionStyle">
          <div className="style1">
            <h3 className="h3Style">8，dark主题</h3>
            <Menu items={items1} theme="dark" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
