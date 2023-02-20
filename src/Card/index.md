---
# title: 自定义页面名称
# order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: 组件
group:
  title: 数据展示：
---

# Card 卡片

通用卡片容器

```jsx
import { Card } from "@any_ui/core";

export default () => (
  <>
    <Card
      title="Card title"
      style={{ width: 300 }}
      bordered={true}
      headStyle={{ color: "skyblue" }}
      bodyStyle={{ color: "red" }}
      extra={<a href="#">More</a>}
    >
      <p>Card content</p>
      <p>Card content</p>
    </Card>
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

## Card API

|   参数    |         说明         |      类型       | 默认值 |
| :-------: | :------------------: | :-------------: | :----: |
|   title   |       卡片标题       |   `ReactNode`   |   --   |
|   style   |     指定按钮大小     |    `String`     |   sm   |
| bordered  |      是否有边框      |    `boolean`    |   --   |
| headStyle |  自定义标题区域样式  | `CSSProperties` |   --   |
| bodyStyle |  内容区域自定义样式  | `CSSProperties` |   --   |
|   extra   | 卡片右上角的操作区域 |   `ReactNode`   |   --   |
|   cover   |       卡片封面       |   `ReactNode`   |   --   |
