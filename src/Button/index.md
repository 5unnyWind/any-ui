---
# title: 自定义页面名称
# order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: 组件
group:
  title: 基础组件：
---

# Button

用于触发一个按钮点击操作

```jsx
import { Button } from "@any_ui/core";

export default () => (
  <>
    <Button label="Download" size="sm" type="default" wave></Button>
    <Button label="Download" size="md" type="primary" wave></Button>
    <Button label="Download" size="lg" color="red" glossy wave></Button>
  </>
);
```

## Button API

|   参数    |                  说明                   |    参数    |       类型        | 默认值 |
| :-------: | :-------------------------------------: | :--------: | :---------------: | :----: |
|   lebel   |              按钮内容信息               |     --     |     `String`      |   --   |
|   size    |              指定按钮大小               | `sm md lg` |     `String`      |   sm   |
|   color   |                颜色类型                 |     --     |     `String`      |   --   |
|   wave    |                 水波纹                  |     --     |     `Boolean`     | false  |
| disabled  |                  禁用                   |     --     |     `Boolean`     | false  |
| children  | 可以传入子组件，但 label 有更高的优先级 |     --     | `React.ReactNode` |   --   |
|  padding  |                 内边距                  |     --     |     `String`      |   --   |
| textColor |                字体颜色                 |     --     |     `String`      |   --   |
|  glossy   |                 渐变色                  |     --     |     `String`      |   --   |
