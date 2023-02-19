---
# title: 自定义页面名称
# order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: 组件
group:
  title: 数据展示：
---

# Input

Input 表单

```jsx
import { Input } from "@any_ui/core";
export default () => {
  return (
    <>
      <Input label="Label" placeholder="Placeholder"></Input>
      <br />
      <Input label="Label"></Input>
      <br />
      <Input label="Label" outlined></Input>
    </>
  );
};
```

## Input API

|    参数     |      说明      |   类型   | 默认值 |
| :---------: | :------------: | :------: | :----: |
|    label    |    表单标题    | `String` |   --   |
|   bgColor   |    背景颜色    | `String` |   --   |
|    fill     |    填充颜色    | `String` |   --   |
|  outlined   |    边框颜色    | `String` |   --   |
| placeholder | placeholder 值 | `String` |   --   |
