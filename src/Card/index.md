---
# title: 自定义页面名称
# order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: 组件
group:
  title: 数据展示：
---

# Card

通用卡片容器

```jsx
import { Card } from "any-ui";

export default () => (
  <>
    <Card
      title="Card title"
      style={{ width: 300 }}
      bordered={true}
      extra={<a href="#">More</a>}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
    >
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </>
);
```
