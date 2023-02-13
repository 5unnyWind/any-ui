---
# title: 自定义页面名称
# order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: 组件
group:
  title: 数据录入：
---

# Select

**选择器尺寸**
选择器有大、中、小三种尺寸。
通过设置 size 为 lg sm 分别把选择器设为大、小尺寸。若不设置 size，则尺寸为中。

```jsx
import { Select } from "any-ui";

const options = [
  {
    label: "orange",
    value: "orange",
  },
  {
    label: "banana",
    value: "banana",
  },
  {
    label: "apple",
    value: "apple",
  },
];
export default function App() {
  return (
    <div>
      <h2>大</h2>
      <Select
        placeholder={"choose a fruit"}
        options={options}
        size="lg"
      ></Select>
      <h2>中</h2>
      <Select placeholder={"choose a fruit"} options={options}></Select>
      <h2>小</h2>
      <Select placeholder={"选择一种水果"} options={options} size="sm"></Select>
    </div>
  );
}
```

**多选选择器**
通过设置 mode="mutiple"将选择器设置为多选选择器，若不设置则默认为单选。

```jsx
import { Select } from "any-ui";

const options = [
  {
    label: "orange",
    value: "orange",
  },
  {
    label: "banana",
    value: "banana",
  },
  {
    label: "apple",
    value: "apple",
  },
];

export default function App() {
  return (
    <div>
      <Select
        placeholder={"choose a fruit"}
        options={options}
        mode="mutiple"
      ></Select>
    </div>
  );
}
```

**禁用属性**
通过设置 disabled 将选择器设置为禁用，若不设置则默认为 false。

```jsx
import { Select } from "any-ui";
const options = [
  {
    label: "orange",
    value: "orange",
  },
  {
    label: "banana",
    value: "banana",
  },
  {
    label: "apple",
    value: "apple",
  },
];
export default function App() {
  return (
    <div>
      <Select
        placeholder={"choose a fruit"}
        options={options}
        disabled
      ></Select>
    </div>
  );
}
```
