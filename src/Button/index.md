---
# title: 自定义页面名称
# order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: 组件
group:
  title: 基础组件：
---

# Button

用于触发一个操作

```jsx
import { Button } from "@any-ui/core";

export default () => (
  <>
    <Button label="Download" size="sm" type="default" wave></Button>
    <Button label="Download" size="md" type="primary" wave></Button>
    <Button label="Download" size="lg" color="red" glossy wave></Button>
  </>
);
```
