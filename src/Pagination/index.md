---
# title: 自定义页面名称
# order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: 组件
group:
  title: 数据展示：
---

# Pagination

## 基础

```jsx
import { Pagination } from "@any_ui/core";

const totalDemo = 50;

export default () => (
  <>
    <Pagination total={totalDemo} />
  </>
);
```

## 更多

```jsx
import { Pagination } from "@any_ui/core";

const moreTotal = 500;

export default () => (
  <>
    <Pagination total={moreTotal} defaultCurrent={5} />
  </>
);
```

## 跳转

```jsx
import { Pagination } from "@any_ui/core";

const moreTotal = 500;

export default () => (
  <>
    <Pagination total={moreTotal} showQuickJumper />
  </>
);
```

## 简洁

```jsx
import { Pagination } from "@any_ui/core";

const moreTotal = 500;

export default () => (
  <>
    <Pagination total={moreTotal} simple />
  </>
);
```

## Pagination API

|      参数       |          说明          |        类型        |           默认值           |
| :-------------: | :--------------------: | :----------------: | :------------------------: |
|     current     |        当前页面        |      `Number`      |             -              |
| defaultCurrent  |        默认页面        |      `Number`      |             1              |
| defaultPageSize |      默认每页条数      |      `Number`      |             10             |
|    disabled     |        禁用分页        |     `Boolean`      |           false            |
|    pageSize     |        每页条数        |      `Number`      |             10             |
|     simple      |   是否切换到简洁分页   |     `Boolean`      |             -              |
| showQuickJumper | 是否可以快速跳转至某页 | `Boolean / Object` | false / { goButton: true } |
|    prevIcon     |  指定默认的上一页图标  |    `ReactNode`     |             -              |
|    nextIcon     |  指定默认的下一页图标  |    `ReactNode`     |             -              |
|  jumpPrevIcon   |  指定默认的上五页图标  |    `ReactNode`     |             -              |
|  jumpNextIcon   |  指定默认的下五页图标  |    `ReactNode`     |             -              |
