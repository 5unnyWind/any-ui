---
# title: 自定义页面名称
# order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: 组件
group:
  title: 数据展示：
---

# Breadcrumb 面包屑路由导航

显示当前页面在系统层级结构中的位置，并能向上返回。

## 示例

### 基本用法

```jsx
import { Breadcrumb } from "@any_ui/core";

const routes = [{ label: "Home" }, { label: "System" }, { label: "Workplace" }];

export default () => (
  <>
    <Breadcrumb routes={routes} />
  </>
);
```

### 指向外链接

```jsx
import { Breadcrumb } from "@any_ui/core";

const routes = [
  { label: "Home" },
  { label: "System", href: "https://www.baidu.com" },
  { label: "Workplace" },
];

export default () => (
  <>
    <Breadcrumb routes={routes} />
  </>
);
```

### 自定义分割线

```jsx
import { Breadcrumb } from "@any_ui/core";

const routes = [{ label: "Home" }, { label: "System" }, { label: "Workplace" }];

export default () => (
  <>
    <Breadcrumb routes={routes} separator=">" />

    <div style={{ margin: "20px 0" }}></div>

    <Breadcrumb routes={routes} separator="→" />

    <div style={{ margin: "20px 0" }}></div>

    <Breadcrumb routes={routes} separator="📝" />
  </>
);
```

### 颜色类型

只支持全黑色（black）和默认（default）类型。

```jsx
import { Breadcrumb } from "@any_ui/core";

const routes = [{ label: "Home" }, { label: "System" }, { label: "Workplace" }];

export default () => (
  <>
    <Breadcrumb routes={routes} colorType="black" />

    <div style={{ margin: "20px 0" }}></div>

    <Breadcrumb routes={routes} colorType="default" />
  </>
);
```

### router 绑定

增加 route，默认实现绑定跳转，尝试点击 workplace。

```jsx
import { Breadcrumb } from "@any_ui/core";

const routes = [
  { label: "Home", route: "/home" },
  { label: "System", route: "/system" },
  { label: "Workplace", route: "/workplace" },
];

export default () => (
  <>
    <Breadcrumb routes={routes} colorType="black" />
  </>
);
```

## Breadcrumb API

|   参数    |     说明     |    类型     | 默认值 |
| :-------: | :----------: | :---------: | :----: |
|  routes   |  路由信息组  |  `Route[]`  |   --   |
| separator | 自定义分隔符 | `ReactNode` |   /    |
| colorType |   颜色类型   | `ColorType` |   --   |

## `Route`

`type ColorType = "black" | "default";`
| 参数 | 说明 | 类型 | 默认值 |
| :----: | :----: | :----: | :----: |
| disabled | 是否禁用 | `boolean` | false |
| route | 路由路径 | `string` | -- |
| label | 菜单项标题 | `ReactNode` | -- |
| href | 外链接（设置该值后默认使用链接） | `string` | -- |
