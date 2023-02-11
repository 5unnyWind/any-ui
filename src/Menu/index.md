---
# title: 自定义页面名称
# order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: 组件
group:
  title: 数据展示：
---

# Menu

水平菜单

> 📝 菜单组件演示，以下中以 📝、📗 作为为图标代替

```jsx
import { Menu } from "any-ui";

const items = [
  { label: "主页", index: "0" },
  { label: "邮箱", index: "1" },
  { label: "更多咨询", index: "2" },
  { label: "友链", index: "3" },
];

export default () => (
  <>
    <div>
      <h3>1，基础使用</h3>
      <Menu items={items} />
    </div>
  </>
);
```

```jsx
import { Menu } from "any-ui";

const items = [
  { label: "主页", index: "0" },
  { label: "邮箱", index: "1", disabled: true },
  { label: "更多咨询", index: "2" },
  { label: "友链", index: "3", disabled: true },
];

export default () => (
  <>
    <div>
      <h3>2，禁止菜单</h3>
      <Menu items={items} />
    </div>
  </>
);
```

```jsx
import { Menu } from "any-ui";

const link = (
  <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
    点我百度
  </a>
);

const items = [
  { label: link, index: "0" },
  { label: "邮箱", index: "1" },
  { label: "更多咨询", index: "2" },
  { label: "友链", index: "3" },
];

export default () => (
  <>
    <div>
      <h3>3，自定义菜单项</h3>
      <p>默认功能为自定义功能</p>
      <Menu items={items} />
    </div>
  </>
);
```

```jsx
import { Menu } from "any-ui";

const myIcon = <span>￥￥</span>;

const items = [
  { label: "主页", index: "0", icon: "📗" },
  { label: "邮箱", index: "1", icon: myIcon },
  { label: "更多咨询", index: "2", icon: "📝" },
  { label: "友链", index: "3", icon: "📗" },
];

export default () => (
  <>
    <div>
      <h3>4，自定义菜单图标</h3>
      <Menu items={items} />
    </div>
  </>
);
```

```jsx
import { Menu } from "any-ui";

const onClick: MenuProps["onClick"] = (e) => {
  console.log("click ", e);
};

const items = [
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
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        链接4
      </a>
    ),
    key: "alipay",
  },
];

export default () => (
  <>
    <div>
      <h3>5，子菜单及选择事件</h3>
      <Menu items={items} onClick={onClick} />
    </div>
  </>
);
```

```jsx
import { Menu } from "any-ui";

const onClick: MenuProps["onClick"] = (e) => {
  console.log("click ", e);
};

const items = [
  {
    label: "导航1",
    index: "mail",
    icon: "📗",
    children: [
      {
        type: "group",
        label: "子菜单1",
        icon: "📗",
        children: [
          {
            label: "子菜单1-1",
            index: "setting:1",
            icon: "📗",
          },
          {
            label: "子菜单1-2",
            index: "setting:2",
            icon: "📗",
          },
        ],
      },
      {
        type: "group",
        label: "子菜单2",
        icon: "📗",
        children: [
          {
            label: "子菜单2-1",
            index: "setting:3",
            icon: "📗",
          },
          {
            label: "子菜单2-2",
            index: "setting:4",
            icon: "📗",
            children: [
              {
                type: "group",
                label: "子菜单1",
                icon: "📗",
                children: [
                  {
                    label: "子菜单1-1",
                    index: "setting:1",
                    icon: "📗",
                  },
                  {
                    label: "子菜单1-2",
                    index: "setting:2",
                    icon: "📗",
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
    icon: "\t",
    children: [
      {
        type: "group",
        label: "子菜单1",
        icon: "📗",
        children: [
          {
            label: "子菜单1-1",
            index: "setting:1",
            icon: "📗",
          },
          {
            label: "子菜单1-2",
            index: "setting:2",
            icon: "📗",
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        链接4
      </a>
    ),
    icon: "📝",
  },
];

export default () => (
  <>
    <div>
      <h3>6，垂直菜单</h3>
      <Menu items={items} onClick={onClick} mode="vertical" />
    </div>
  </>
);
```
