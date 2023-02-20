---
# title: 自定义页面名称
# order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: 组件
group:
  title: 数据展示：
---

# Drawer

抽屉

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

    <input type="radio" name="position" value="Top" onChange={checkChecked}  className="ai-drawer-input"/>top
    <input type="radio" name="position" value="Bottom" onChange={checkChecked} className="ai-drawer-input"/>bottom
    <input type="radio" name="position" value="Left" onChange={checkChecked} className="ai-drawer-input"/>left
    <input type="radio" name="position" value="Right" onChange={checkChecked} className="ai-drawer-input"/>right

    <Button onClick={showDrawer}>Open Drawer From {whichChecked}</Button>
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
