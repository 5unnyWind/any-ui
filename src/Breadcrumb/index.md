---
# title: 自定义页面名称
# order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: 组件
group:
  title: 数据展示：
---

# Breadcrumb

面包屑

```jsx
import { Breadcrumb } from "any-ui";

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

export default () => (
  <>
    <div className="session">
      <h4>基本用法</h4>
      <Breadcrumb routes={routes1} />
    </div>
    <div className="session">
      <h4>自定义分割线</h4>
      <Breadcrumb routes={routes1} separator=">" />
      <Breadcrumb routes={routes1} separator="→" />
    </div>
    <div className="session">
      <h4>指向外链接</h4>
      <Breadcrumb routes={routes2} />
    </div>
    <div className="session">
      <h4>颜色类型</h4>
      <Breadcrumb routes={routes1} colorType="black" />
    </div>
    <div className="session">
      <h4>router绑定（未完成）</h4>
      <Breadcrumb routes={routes3} />
    </div>
  </>
);
```
