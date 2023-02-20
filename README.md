# ANY-UI

<p align="center" height="256">
<img align="center" height="256" src="./public/logo2.png">
</p>

> 一套用于构建现代 Web 应用的开源设计敏捷方案

<br/>

## Quick Start

```bash
npm i @any_ui/core
# or
yarn add @any_ui/core
# or
pnpm add @any_ui/core
```

```js
import { Button } from "@any_ui/core";

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
├── package.json # 项目配置
├── components # 组件源码
├── docs # 指引文档
├── src # 各组件文档源码
├── build_config # 打包组件用到的配置
……
```

## 发布

- 要发布文档，只需 push 到 main 分支。
- 要发布组件，请执行`pnpm chore [版本号]`, 例如`pnpm chore 0.1.5`,脚本会自动更新`package.json`并打`tag`并 push，确认无误后手动用相应的 tag create release 即可自动集成到 npm。

...

## LICENSE

[MIT](./LICENSE)
