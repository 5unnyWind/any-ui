---
# title: 自定义页面名称
# order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: 组件
group:
  title: 数据展示：
---

# Drawer 抽屉

屏幕边缘滑出的浮层面板。

```jsx
import { Button, Drawer } from "@any_ui/core";
import React, { useState } from 'react';

const App: React.FC = () => {
  const [whichChecked, setWhichChecked] = useState("Right");
  const checkChecked = (): void => {
    let radio = document.getElementsByName("position") as any;
    for (var i = 0; i < radio.length; i++) {
      if (radio[i].checked) {
        setWhichChecked(radio[i].value);
      }
    }
  };
  const [isDrawerOpen,setIsDrawerOpen] = useState(false);
  const showDrawer = () =>{
    setIsDrawerOpen(true);
    console.log(isDrawerOpen)
  }
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  }
  return (
    <>

    <div style={{marginBottom: '20px'}}>
      <input type="radio" name="position" value="Top" onChange={checkChecked}  className="ai-drawer-input"/>top
      <input type="radio" name="position" value="Bottom" onChange={checkChecked} className="ai-drawer-input"/>bottom
      <input type="radio" name="position" value="Left" onChange={checkChecked} className="ai-drawer-input"/>left
      <input type="radio" name="position" value="Right" onChange={checkChecked} className="ai-drawer-input"/>right
    </div>

    <Button onClick={showDrawer} type="primary">Open Drawer From {whichChecked}</Button>

    <Drawer
        title="The Title of Drawer"
        position={whichChecked}
        closeBtn={false}
        open={isDrawerOpen}
        onCancel={closeDrawer.bind(this)}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </Drawer>
    </>
  );
};

export default App;
```

## Drawer API

|   参数   |                 说明                 |               类型               | 默认值 |
| :------: | :----------------------------------: | :------------------------------: | :----: |
|  title   |                 标题                 |           `ReactNode`            |   --   |
| position |              抽屉的方向              | `top \| right \| bottom \| left` | right  |
| closeBtn |           是否存在关闭按钮           |            `boolean`             |   --   |
|   open   |           Drawer 是否可见            |            `boolean`             |   --   |
| onCancel | 点击遮罩层或左上角叉或取消按钮的回调 |          `function(e)`           |   --   |
