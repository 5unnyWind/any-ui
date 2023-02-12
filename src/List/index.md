---
# title: 自定义页面名称
# order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: 组件
group:
  title: 数据展示：
---

# List

**列表尺寸**
列表有大、中、小三种尺寸。
通过设置 size 为lg sm 分别把按列表为大、小尺寸。若不设置 size，则尺寸为中。 
**是否展示边框**
通过设置bordered为true/false来设定是否需要边框。若不设置bordered，则为true。

```jsx
import { List } from "any-ui";

const data = [
'Racing car sprays burning fuel into crowd.',
'Japanese princess to wed commoner.',
'Australian walks 100km after outback crash.',
'Man charged over missing wedding girl.',
'Los Angeles battles huge wildfires.',
];

export default function App() {
  return (
    <>
    <List  dataSource={data} size = "lg"></List>
    <List bordered dataSource={data} size = "md"></List>
    <List bordered dataSource={data} size = "sm" ></List>
    </>
  );
}
```


**列表头部**
通过设置header来设置列表头名
**列表底部**
通过设置footer来设置列表底名。
```jsx
import { List } from "any-ui";

const data = [
'Racing car sprays burning fuel into crowd.',
'Japanese princess to wed commoner.',
'Australian walks 100km after outback crash.',
'Man charged over missing wedding girl.',
'Los Angeles battles huge wildfires.',
];
export default function App() {
  return (
    <>
    <List bordered = "false" dataSource={data} header = "header" footer = "footer"></List>
    </>
  );
}

```
**自定义渲染列表项**
通过设置renderItem，当使用 dataSource 时，可以用 renderItem,自定义渲染列表项。
```jsx
import { List } from "any-ui";
import img from "./daddsf.png"
const data = [
'Racing car sprays burning fuel into crowd.',
'Japanese princess to wed commoner.',
'Australian walks 100km after outback crash.',
'Man charged over missing wedding girl.',
'Los Angeles battles huge wildfires.',
];
let count = 1;
export default function App() {
  return (
    <>
    <List dataSource={data} renderItem = {(item) => (<ul>
        <img key = {count++} className = "ai-li-demo-pic" src = {img} alt = "a picture" ></img>[ITEM] {item}</ul>)
    }></List>
    </>
  );
}
```
