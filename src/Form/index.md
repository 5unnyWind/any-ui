---
# title: 自定义页面名称
# order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: 组件
group:
  title: 数据展示：
---

# Form 表单

高性能表单控件，自带数据域管理。

```jsx
import { Form, Button, Field, Input } from "@any_ui/core";
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
      <Field name={"username"} rules={[nameRules]}>
        <Input label="用户名" placeholder="username"></Input>
      </Field>
      <Field name={"password"} rules={[passworRules]}>
        <Input label="密码" placeholder="Placeholder"></Input>
      </Field>
      <Field>
        <Button type="primary">admin</Button>
      </Field>
    </Form>
  </>
);
```

## Form API

|         参数          | 说明 |                       类型                        | 默认值 |
| :-------------------: | :--: | :-----------------------------------------------: | :----: |
|     getFieldValue     |      | `(name: NamePath, label: NamePath) => StoreValue` |   --   |
|        submit         |      |                   `() => void`                    |
|    getFieldsValue     |      |                  `() => Values`                   |   --   |
|    setFieldsValue     |      |            `(newStore: Store) => void`            |   --   |
|     setCallbacks      |      |         `(callbacks: Callbacks) => void`          |   --   |
| registerFieldEntities |      |          `(entity: FieldEntity) => void`          |   --   |
|      resetFields      |      |           `(fields?: string[]) => void`           |   --   |

### From CallBack

`type StoreValue = any`

|      参数      |               说明               |                             类型                             | 默认值 |
| :------------: | :------------------------------: | :----------------------------------------------------------: | :----: |
| onValuesChange |     字段值更新时触发回调事件     |        `(changedValues: any, values: Values) => void`        |   --   |
| onFieldsChange |      字段更新时触发回调事件      | `(changedFields: NamePath[], allFields: NamePath[]) => void` |   --   |
|    onFinish    | 提交表单且数据验证成功后回调事件 |                  `(values: Values) => void`                  |   --   |
| onFinishFailed | 提交表单且数据验证失败后回调事件 | `(changedFields: NamePath[], allFields: NamePath[]) => void` |   --   |

### From Field

`type NamePath = string | number`

| 参数  |              说明              |    类型    | 默认值 |
| :---: | :----------------------------: | :--------: | :----: |
| name  |             字段名             | `NamePath` |   --   |
| rules | 校验规则，设置字段的校验逻辑。 |  `Rule[]`  |   --   |
| label |           标签的文本           | `NamePath` |   --   |
