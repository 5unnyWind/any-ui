---
# title: 自定义页面名称
# order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: 组件
group:
  title: 数据展示：
---

# Table

表格

```jsx
import { Table } from "any-ui";
import dataSource from "../../components/table/demo/mock.json";

export default () => (
  <>
    <h3>基础表格</h3>
    <Table dataSource={dataSource} />
  </>
);
```
