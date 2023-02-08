---
# title: 自定义页面名称
# order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: 组件
group:
  title: 数据展示：
---

# Tree

树形控件

```jsx
import { Tree } from "any-ui";
const simple = [
  {
    label: "Satisfied customers (with avatar)",
    children: [
      {
        label: "1231231",
        children: [
          {
            label: "12312",
          },
          { label: "421412e" },
        ],
      },
      {
        label: "214121t1412 i412)",
        children: [{ label: "Pr142141tion" }, { label: "Pro21412412al41iter" }],
      },
      {
        label: "Ple4nt su141h icon)",
        children: [
          { label: "Ha141" },
          { label: "Good ta124ation" },
          { label: "Plea124or" },
        ],
      },
    ],
  },
];
export default () => {
  return (
    <>
      <Tree list={simple}></Tree>
    </>
  );
};
```

```jsx
import { Tree } from "any-ui";
const simple = [
  {
    label: "Satisfied customers (with avatar)",
    children: [
      {
        label: "1231231",
        children: [
          {
            label: "12312",
            children: [
              {
                label: "Pr142141tion",
                children: [
                  { label: "Pr142141tion" },
                  { label: "Pro21412412al41iter" },
                ],
              },
              { label: "Pro21412412al41iter" },
            ],
          },
          { label: "421412e" },
        ],
      },
      {
        label: "214121t1412 i412)",
        children: [{ label: "Pr142141tion" }, { label: "Pro21412412al41iter" }],
      },
      {
        label: "Ple4nt su141h icon)",
        children: [
          { label: "Ha141" },
          { label: "Good ta124ation" },
          { label: "Plea124or" },
        ],
      },
    ],
  },
];
export default () => {
  return (
    <>
      <Tree list={simple} checkbox></Tree>
    </>
  );
};
```
