---
# title: 自定义页面名称
# order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: 组件
group:
  title: 基础组件：
---

# Button 按钮

用于触发一个按钮点击操作

### 基础功能

按钮基础功能设置。文本显示方式有三种，而当 label 和 children 同时存在时，优先使用 children 进行文本显示。

```jsx
import { Button } from "@any_ui/core";

const children = (
  <a href="https://any-ui.ncuos.com/" style={{ color: "skyblue" }}>
    自定义链接
  </a>
);

export default () => (
  <>
    <h3>按钮文本</h3>
    <div
      style={{
        width: "280px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button>default</Button>
      <Button label="label"></Button>
      <Button children={children}></Button>
    </div>

    <h3>按钮大小</h3>
    <div
      style={{
        width: "150px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button size="sm">sm</Button>
      <Button size="md">md</Button>
      <Button size="lg">lg</Button>
    </div>

    <h3>按钮颜色</h3>
    <div
      style={{
        width: "260px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button color="red">red</Button>
      <Button color="skyblue">skyblue</Button>
      <Button color="lightgreen">lightgreen</Button>
    </div>

    <h3>按钮类型</h3>
    <div
      style={{
        width: "350px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button type="primary">primary</Button>
      <Button type="danger">danger</Button>
      <Button type="default">default</Button>
      <Button type="link">link</Button>
    </div>

    <h3>按钮禁用</h3>
    <div
      style={{
        width: "100px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button disabled>disabled</Button>
    </div>
  </>
);
```

### 按钮样式

内置按钮特效有水波纹和渐变色，可结合使用。

```jsx
import { Button } from "@any_ui/core";

export default () => (
  <>
    <h3>水波纹</h3>
    <div
      style={{
        width: "350px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button wave>wave</Button>
      <Button type="primary" wave>
        primary
      </Button>
      <Button type="danger" wave>
        danger
      </Button>
      <Button type="link" wave>
        link
      </Button>
    </div>

    <h3>渐变色</h3>
    <div
      style={{
        width: "350px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button glossy>wave</Button>
      <Button type="primary" glossy>
        primary
      </Button>
      <Button type="danger" glossy>
        danger
      </Button>
      <Button type="link" glossy>
        link
      </Button>
    </div>
  </>
);
```

## Button API

|   参数    |                  说明                   |    参数    |       类型        | 默认值 |
| :-------: | :-------------------------------------: | :--------: | :---------------: | :----: |
|   label   |              按钮内容信息               |     --     |     `String`      |   --   |
|   size    |              指定按钮大小               | `sm md lg` |     `String`      |   sm   |
|   color   |                颜色类型                 |     --     |     `String`      |   --   |
|   wave    |                 水波纹                  |     --     |     `Boolean`     | false  |
| disabled  |                  禁用                   |     --     |     `Boolean`     | false  |
| children  | 可以传入子组件，但 label 有更高的优先级 |     --     | `React.ReactNode` |   --   |
|  padding  |                 内边距                  |     --     |     `String`      |   --   |
| textColor |                字体颜色                 |     --     |     `String`      |   --   |
|  glossy   |                 渐变色                  |     --     |     `String`      |   --   |
