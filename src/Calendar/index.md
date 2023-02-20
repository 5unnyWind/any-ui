---
# title: 自定义页面名称
# order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: 组件
group:
  title: 数据展示：
---

# Calendar

通用日历组件

## 示例

### 基础使用

```jsx
import { Calendar } from "@any_ui/core";

export default () => (
  <>
    <Calendar></Calendar>
  </>
);
```

### 改变颜色

```jsx
import { Calendar } from "@any_ui/core";

export default () => (
  <>
    <Calendar color={"green"}></Calendar>
  </>
);
```

### 初始模式

```jsx
import { Calendar } from "@any_ui/core";

export default () => (
  <>
    <Calendar calendarType={"year"}></Calendar>
  </>
);
```

### 自定义日历头部

```jsx
import { Calendar } from "@any_ui/core";

export default () => (
  <>
    <Calendar calendarHeaderName={"Custom header content"}></Calendar>
  </>
);
```

## Calendar API

|        参数        |       说明       |          类型          | 默认值 |
| :----------------: | :--------------: | :--------------------: | :----: |
|        day         |  默认展示的日期  |       `DateTyoe`       |   --   |
|        year        |  默认展示的年份  |        `number`        |   --   |
|       month        |  默认展示的月份  |        `number`        |   --   |
|       color        |     主题颜色     |        `string`        |   --   |
|    calendarType    |     初始模式     |        `string`        | month  |
| calendarHeaderName |   日历头部内容   |        `string`        |   --   |
|      onChange      |   日期变化回调   | `(date: Date) => void` |   --   |
|      onClick       | 点击选择日期回调 | `(date: Date) => void` |   --   |
