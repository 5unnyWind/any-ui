import React, { useEffect } from "react";
import Form, { Field, useForm } from "../component";
import "../style/index.scss";
import  Button  from "../../button/button";
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
      <Field name={"username"}  rules={[nameRules]}>
        <input placeholder="用户名" />
      </Field>
      <Field name={"password"}  rules={[passworRules]}>
        <input placeholder="密码" type="password" />
      </Field>
      <Card
        title="123"
        style={{ width: 300 }}
        bordered={true}
        headStyle={{ color: "yellow" }}
        bodyStyle={{ color: "red" }}
        extra={<a href="#">More</a>}
        cover={<img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />}
               
      >
        <p>9999</p>
        <p>9999</p>
      </Card>
      <Card
        title="123"
        style={{ width: 300 }}
        bordered={true}
        headStyle={{ color: "yellow" }}
        bodyStyle={{ color: "red" }}
        extra={<a href="#">More</a>}
        cover={<img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />}
               
      >
        <p>9999</p>
        <p>9999</p>
      </Card>
      <Button type="primary">admin</Button>
    </Form>
  );
};

export default index;
