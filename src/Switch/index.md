---
# title: 自定义页面名称
# order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: 组件
group:
  title: 数据展示：
---

# Switch

通用开关组件

## 示例

### 基础使用

```jsx
import { Switch } from "any-ui";

const onClick = (ischecked: boolean) => {
  console.log(ischecked);
};

export default () => (
  <>
    <Switch onClick={onClick}></Switch>
  </>
);
```

### 禁止状态

```jsx
import { Switch } from "@any_ui/core";

export default () => (
  <>
    <Switch disabled={true}></Switch>
  </>
);
```

### 更换颜色

```jsx
import { Switch } from "any-ui";

export default () => (
  <>
    <Switch activeColor={"green"} inactiveColor={"red"}></Switch>
  </>
);
```

### 更换长度

```jsx
import { Switch } from "any-ui";

export default () => (
  <>
    <Switch width={60}></Switch>
  </>
);
```

### 加入文本

```jsx
import { Switch } from "any-ui";

export default () => (
  <>
    <Switch activeValue={"开启"} inactiveValue={"关闭"}></Switch>
  </>
);
```

## Switch API

|      参数      |       说明       |              类型               | 默认值 |
| :------------: | :--------------: | :-----------------------------: | :----: |
|   ischecked    | 指定当前是否选中 |            `boolean`            | false  |
|   className    |  Switch 器类名   |            `	string`             |   --   |
| defaultChecked |   初始是否选中   |            `boolean`            |  true  |
|    disabled    |     是否禁用     |            `boolean`            | false  |
|     width      |     开关大小     |            `string`             |  40px  |
|  activeColor   |     开启颜色     |            `string`             |   --   |
| inactiveColor  |     关闭颜色     |            `string`             |   --   |
|  activeValue   |     开启文本     |            `string`             |   --   |
| inactiveValue  |     关闭文本     |            `string`             |   --   |
|    onClick     |     点击回调     | `(ischecked?: boolean) => void` |   --   |
