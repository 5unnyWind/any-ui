---
# title: 自定义页面名称
# order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: 组件
group:
  title: 数据展示：
---

# List 通用列表

### 列表尺寸

列表有大、中、小三种尺寸。
通过设置 size 为 lg sm 分别把按列表为大、小尺寸。若不设置 size，则尺寸为中。

### 是否展示边框

通过设置 bordered 为 true/false 来设定是否需要边框。若不设置 bordered，则为 true。

```jsx
import { List } from "@any_ui/core";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

export default function App() {
  return (
    <>
      <List dataSource={data} size="lg"></List>
      <br />

      <List bordered dataSource={data} size="md"></List>
      <br />

      <List bordered dataSource={data} size="sm"></List>
    </>
  );
}
```

### 列表头部

通过设置 header 来设置列表头名

### 列表底部

通过设置 footer 来设置列表底名。

```jsx
import { List } from "@any_ui/core";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];
export default function App() {
  return (
    <>
      <List
        bordered="false"
        dataSource={data}
        header="header"
        footer="footer"
      ></List>
    </>
  );
}
```

### 自定义渲染列表项

通过设置 renderItem，当使用 dataSource 时，可以用 renderItem,自定义渲染列表项。

```jsx
import { List } from "@any_ui/core";
import img from "./daddsf.png";
const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];
let count = 1;
export default function App() {
  return (
    <>
      <List
        dataSource={data}
        renderItem={(item) => (
          <ul>
            <img
              key={count++}
              className="ai-li-demo-pic"
              src={img}
              alt="a picture"
            ></img>[ITEM] {item}
          </ul>
        )}
      ></List>
    </>
  );
}
```

## List API

|    参数    |                           说明                           |            类型             | 默认值  |
| :--------: | :------------------------------------------------------: | :-------------------------: | :-----: |
| dataSource |                        列表数据源                        |           `any[]`           |   --    |
|   footer   |                         列表底部                         |         `ReactNode`         |   --    |
|   header   |                         列表头部                         |         `ReactNode`         |   --    |
|  bordered  |                       是否展示边框                       |          `boolean`          |   --    |
|    size    |                       list 的尺寸                        | `default \| large \| small` | default |
| renderItem | 当使用 dataSource 时，可以用 renderItem 自定义渲染列表项 |    `(item) => ReactNode`    |   --    |
