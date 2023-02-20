---
nav:
  title: Components
group:
  title: Data Display：
---

# Badge

Displays a badge to draw attention to an indicator.

```jsx
import { Badge } from "@any_ui/core";

export default () => (
  <>
    <h2>Badge</h2>
    <Badge type="default">Default</Badge>

    <h2>Anchored Badge</h2>
    <h3>topRight:</h3>
    <Badge.Anchor>
      <Badge>12</Badge>
      <img
        src="https://img.yzcdn.cn/vant/cat.jpeg"
        alt="avatar"
        style={{ width: "50px", height: "50px", borderRadius: "5px" }}
      />
    </Badge.Anchor>
    <h3>bottomRight:</h3>
    <Badge.Anchor placement="bottomRight">
      <Badge>Badge</Badge>
      <img
        src="https://img.yzcdn.cn/vant/cat.jpeg"
        alt="avatar"
        style={{ width: "50px", height: "50px", borderRadius: "5px" }}
      />
    </Badge.Anchor>
  </>
);
```

## Badge API

|   参数    |               说明                |       类型        | 默认值  |
| :-------: | :-------------------------------: | :---------------: | :-----: |
|   type    |           Type of badge           |   `BadgeTypes`    | default |
| children  |       Content of the badge        | `React.ReactNode` |   --    |
|    dot    | Render the content as an ellipsis |     `Boolean`     |  false  |
| className |         Custom CSS class          |     `String`      |   --    |

`BadgeTypes` = "default" | "secondary" | "success" | "warning" | "error"

<br/>

## Badge.Anchor API

|   参数    |               说明                |          类型          |  默认值  |
| :-------: | :-------------------------------: | :--------------------: | :------: |
| placement |      Placement of the anchor      | `BadgeAnchorPlacement` | topRight |
|   type    |           Type of badge           |        `String`        | default  |
| children  |   Content of the anchored badge   |   `React.ReactNode`    |    --    |
|    dot    | Render the content as an ellipsis |       `Boolean`        |  false   |
| className |         Custom CSS class          |        `String`        |    --    |

`BadgeAnchorPlacement` = "topLeft" | "topRight" | "bottomLeft" | "bottomRight"

<br/>
