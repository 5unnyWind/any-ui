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
import { Input } from "any-ui";
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
