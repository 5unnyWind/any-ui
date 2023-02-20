---
# title: 自定义页面名称
# order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: 组件
group:
  title: 数据展示：
---

# Modal 对话框

模态对话框。

```jsx
import React, { useState } from "react";
import { Modal, Button } from "@any_ui/core";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={showModal} type="primary">
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        style={{ width: 300 }}
        okText="确  认"
        cancelText="取  消"
        open={isModalOpen}
        onOk={handleOk.bind(this)}
        onCancel={handleCancel.bind(this)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default App;
```

### Modal API

|    参数    |                 说明                 |     类型      | 默认值 |
| :--------: | :----------------------------------: | :-----------: | :----: |
|   title    |                 标题                 |  `ReactNode`  |   --   |
|   okText   |             确认按钮文字             |  `ReactNode`  |   --   |
| cancelText |             取消按钮文字             |  `ReactNode`  |   --   |
|    open    |            对话框是否可见            |   `boolean`   |   --   |
|    onOk    |             点击确定回调             | `	function(e)` |   --   |
|  onCancel  | 点击遮罩层或右上角叉或取消按钮的回调 | `	function(e)` |   --   |
