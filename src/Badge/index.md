---
# title: 自定义页面名称
# order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: 组件
group:
  title: 数据展示：
---

# Badge 徽标

显示一个需要注意的指标

```jsx
import { Badge } from "@any_ui/core";

export default () => (
  <>
    <h2>徽标</h2>
    <Badge type="default">默认</Badge>

    <h2>锚定徽标</h2>
    <h3>topRight:</h3>
    <Badge.Anchor>
      <Badge>12</Badge>
      <img
        src="https://img.yzcdn.cn/vant/cat.jpeg"
        alt="头像"
        style={{ width: "50px", height: "50px", borderRadius: "5px" }}
      />
    </Badge.Anchor>
    <h3>bottomRight:</h3>
    <Badge.Anchor placement="bottomRight">
      <Badge>徽标</Badge>
      <img
        src="https://img.yzcdn.cn/vant/cat.jpeg"
        alt="头像"
        style={{ width: "50px", height: "50px", borderRadius: "5px" }}
      />
    </Badge.Anchor>
  </>
);
```

## Badge API

|   参数    |        说明        |       类型        | 默认值  |
| :-------: | :----------------: | :---------------: | :-----: |
|   type    |        类型        |   `BadgeTypes`    | default |
| children  |      徽标内容      | `React.ReactNode` |   --    |
|    dot    | 将内容渲染为省略号 |     `Boolean`     |  false  |
| className |     自定义样式     |     `String`      |   --    |

`BadgeTypes` = "default" | "secondary" | "success" | "warning" | "error"

<br/>

## Badge.Anchor API

|   参数    |        说明        |          类型          |  默认值  |
| :-------: | :----------------: | :--------------------: | :------: |
| placement |      锚点位置      | `BadgeAnchorPlacement` | topRight |
|   type    |        类型        |        `String`        | default  |
| children  |      徽标内容      |   `React.ReactNode`    |    --    |
|    dot    | 将内容渲染为省略号 |       `Boolean`        |  false   |
| className |     自定义样式     |        `String`        |    --    |

`BadgeAnchorPlacement` = "topLeft" | "topRight" | "bottomLeft" | "bottomRight"

<br/>
