import React, { useEffect } from "react";
import Form, { Field, useForm } from "../part";
import "../style/index.scss";
import Button from "../../button/button";
import Card from "../../card/card";
const nameRules = { required: true, message: "请输入姓名！" };
const passworRules = { required: true, message: "请输入密码！" };

const index: React.FC = () => {
  const [form] = useForm();

  // useEffect(() => {
  //   form.setFieldsValue({ username: "default" });
  // }, []);

  return (
    <Form
      onFinish={(values) => {
        console.log("values", values);
      }}
      onFinishFailed={(err) => {
        console.log("err", err);
      }}
      form={form}
    >
      <Field name={"username"} label="Username" rules={[nameRules]}>
        <input placeholder="用户名" />
      </Field>
      <Field name={"password"} label="Username" rules={[passworRules]}>
        <input placeholder="密码" type="password" />
      </Field>

      <Button type="primary">admin</Button>
      <Button
        type="primary"
        onClick={() => {
          form.resetFields();
        }}
      >
        reset
      </Button>
    </Form>
  );
};

export default index;
