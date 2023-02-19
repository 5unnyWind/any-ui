---
# title: 自定义页面名称
# order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: 组件
group:
  title: 数据展示：
---

# Tree

normal

```jsx
import { Tree } from "@any_ui/core";
const simple = [
  {
    label: "a",
    children: [
      {
        label: "b",
        children: [
          {
            label: "b",
          },
          { label: "c" },
        ],
      },
      {
        label: "d",
        children: [{ label: "e" }, { label: "f" }],
      },
      {
        label: "g",
        children: [{ label: "h" }, { label: "i" }, { label: "j" }],
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

# Tree

checkbox

```jsx
import { Tree } from "@any_ui/core";
const simple = [
  {
    label: "a",
    children: [
      {
        label: "b",
        children: [
          {
            label: "c",
            children: [
              {
                label: "d",
                children: [{ label: "e" }, { label: "f" }],
              },
              { label: "g" },
            ],
          },
          { label: "h" },
        ],
      },
      {
        label: "i",
        children: [{ label: "j" }, { label: "k" }],
      },
      {
        label: "l",
        children: [{ label: "m" }, { label: "n" }, { label: "o" }],
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

## Tree API

`type ListItem = { 
  label: string;
  children?: ListItem[];
  check?: boolean;
}`
`type BaseTreeProps = { 
  list: ListItem[];
  checkbox?: boolean
}`
| 参数 | 说明 | 类型 | 默认值 |
| :------: | :----------: | :---------------: | :----: |
| list | 树形控件信息 | `BaseTreeProps[]` | -- |
| checkbox | 树形控件类型 | `Boolean` | false |
