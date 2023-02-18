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

```jsx
import { Switch } from "@any-ui/core";

export default () => (
  <>
    <h2>初始状态</h2>
    <Switch></Switch>
    <h2>修改长度</h2>
    <Switch width={100}></Switch>
    <h2>修改颜色</h2>
    <Switch activeColor={"green"} inactiveColor={"red"}></Switch>
    <h2>传入文本</h2>
    <Switch activeValue={"开启"} inactiveValue="关闭"></Switch>
  </>
);
```
