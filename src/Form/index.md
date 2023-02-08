---
# title: 自定义页面名称
# order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: 组件
group:
  title: 数据展示：
---

# Form

通用卡片容器

```jsx
import { Form, Card, Button, Field, useForm } from "any-ui";
import React, { useEffect } from "react";
const nameRules = { required: true, message: "请输入姓名！" };
const passworRules = { required: true, message: "请输入密码！" };
export default () => (
  <>
    <Form
      onFinish={(values) => {
        console.log("values", values);
      }}
      onFinishFailed={(err) => {
        console.log("err", err);
      }}
    >
      <Field name={"username"} label="用户名:" rules={[nameRules]}>
        <input placeholder="用户名" />
      </Field>
      <Field name={"password"} label="密码:" rules={[passworRules]}>
        <input placeholder="密码" type="password" />
      </Field>
      <Field>
        <Button type="primary">admin</Button>
      </Field>
    </Form>
  </>
);
```
