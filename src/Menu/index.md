---
# title: 自定义页面名称
# order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: 组件
group:
  title: 数据展示：
---

# Menu 导航菜单

为页面和功能提供导航的菜单列表。

> 📝 菜单组件演示，以下中以 📝、📗 作为为图标代替。

## 示例

### 基础使用

```jsx
import { Menu } from "@any-ui/core";

const items = [
  { label: "主页", index: "0" },
  { label: "邮箱", index: "1" },
  { label: "更多咨询", index: "2" },
  { label: "友链", index: "3" },
];

export default () => (
  <>
    <div>
      <div style={{ width: "600px" }}>
        <Menu items={items} />
      </div>
    </div>
  </>
);
```

### 禁止菜单

```jsx
import { Menu } from "@any-ui/core";

const items = [
  { label: "主页", index: "0" },
  { label: "邮箱", index: "1", disabled: true },
  { label: "更多咨询", index: "2" },
  { label: "友链", index: "3", disabled: true },
];

export default () => (
  <>
    <div>
      <div style={{ width: "600px" }}>
        <Menu items={items} />
      </div>
    </div>
  </>
);
```

### 自定义菜单项

默认功能为自定义功能

```jsx
import { Menu } from "@any-ui/core";

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
      <div style={{ width: "600px" }}>
        <Menu items={items} />
      </div>
    </div>
  </>
);
```

### 菜单图标及自定义

```jsx
import { Menu } from "@any-ui/core";

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
      <div style={{ width: "600px" }}>
        <Menu items={items} />
      </div>
    </div>
  </>
);
```

### 自定义点击事件和子菜单

```jsx
import { Menu } from "@any-ui/core";

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
        icon: "📗",
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
        icon: "📗",
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
    icon: "📗",
    disabled: true,
  },
  {
    label: "导航3",
    index: "SubMenu",
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
      <div style={{ width: "600px" }}>
        <Menu items={items} onClick={onClick} />
      </div>
    </div>
  </>
);
```

### 垂直菜单

```jsx
import { Menu } from "@any-ui/core";

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
    label: "导航4",
    index: "user",
    icon: "📝",
  },
];

export default () => (
  <>
    <div>
      <div style={{ width: "600px" }}>
        <Menu items={items} onClick={onClick} mode="vertical" />
      </div>
    </div>
  </>
);
```

## Menu API

|  参数   |                      说明                       |           类型           |   默认值   |
| :-----: | :---------------------------------------------: | :----------------------: | :--------: |
|  items  |                 传入的菜单数组                  |       `ItemType[]`       |     --     |
|  mode   | 菜单类型（水平 _horizontal_ 和垂直 _vertical_） |      `MenuModeType`      | horizontal |
| onClick |             点击事件触发的回调函数              | `(key?: string) => void` |     --     |

## `ItemType`

`type MenuModeType = "vertical" | "horizontal"`
| 参数 | 说明 | 类型 | 默认值 |
| :----: | :----: | :----: | :----: |
| disabled | 是否禁用 | `boolean` | false |
| icon | 菜单图标 | `ReactNode` | -- |
| index | item 的唯一标志（在点击事件中返回） | `string` | 序数 |
| label | 菜单项标题 | `ReactNode` | -- |
| title | 设置收缩时展示的悬浮标题 | `string` | -- |
| children | 子菜单的菜单项（子菜单标识） | `ItemType[]` | -- |
