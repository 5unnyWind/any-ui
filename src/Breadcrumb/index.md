---
# title: 自定义页面名称
# order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: 组件
group:
  title: 数据展示：
---

# Breadcrumb

面包屑组件

```jsx
import { Breadcrumb } from "any-ui";

const routes = [{ label: "Home" }, { label: "System" }, { label: "Workplace" }];

export default () => (
  <>
    <div className="session">
      <h4>基本用法</h4>
      <Breadcrumb routes={routes} />
    </div>
  </>
);
```

```jsx
import { Breadcrumb } from "any-ui";

const routes = [
  { label: "Home" },
  { label: "System", href: "https://www.baidu.com" },
  { label: "Workplace" },
];

export default () => (
  <>
    <div className="session">
      <h4>指向外链接</h4>
      <Breadcrumb routes={routes} />
    </div>
  </>
);
```

```jsx
import { Breadcrumb } from "any-ui";

const routes = [{ label: "Home" }, { label: "System" }, { label: "Workplace" }];

export default () => (
  <>
    <div className="session">
      <h4>自定义分割线</h4>
      <Breadcrumb routes={routes} separator=">" />
      <Breadcrumb routes={routes} separator="→" />
    </div>
  </>
);
```

```jsx
import { Breadcrumb } from "any-ui";

const routes = [{ label: "Home" }, { label: "System" }, { label: "Workplace" }];

export default () => (
  <>
    <div className="session">
      <h4>颜色类型</h4>
      <Breadcrumb routes={routes} colorType="black" />
    </div>
  </>
);
```

```jsx
import { Breadcrumb } from "any-ui";

const routes = [
  { label: "Home", route: "/home" },
  { label: "System", route: "/system" },
  { label: "Workplace", route: "/workplace" },
];

export default () => (
  <>
    <div className="session">
      <h4>router绑定</h4>
      <p>注：组件已实现router跳转，需要自定义路由</p>
      <Breadcrumb routes={routes} colorType="black" />
    </div>
  </>
);
```
