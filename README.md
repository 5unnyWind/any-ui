# ANY-UI

<p align="center" height="256">
<img align="center" height="256" src="./public/logo2.png">
</p>

> 一套用于构建现代 Web 应用的开源设计敏捷方案

<br/>

## Quick Start

```bash
npm i any-ui
# or
yarn add any-ui
# or
pnpm add any-ui
```

```js
import { Button } from "any-ui";

export default () => (
  <>
    <h2>按钮</h2>
    <Button type="default">默认</Button>
  </>
);
```

<br/>

## Documentation

- [中文文档](https://any-ui.ncuos.com/)
- [Document Site](https://any-ui.ncuos.com/en-US)

<br/>

## 开发：

```bash
pnpm i
pnpm dev
```

<br/>

## 项目结构

```
├── components # 组件源码
├── docs # 指南文档
├── src # 各组件文档源码
├── package.json # 项目配置
……
```

## 发布

推送到 mian 分支后，会自动发布

<br/>

## LICENSE

[MIT](./LICENSE)
