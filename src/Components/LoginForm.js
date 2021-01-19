import { Form, Input, Button, Checkbox } from "antd";
import { useState } from "react";
import { Redirect, Route, Router } from "react-router-dom";
import OntroDashboard from "./OntroDashboard";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

function LoginForm() {
  const [onSubmit, setOnSubmit] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  console.log(onSubmit);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.3)",
        color: "white",
        margin: "250px 780px",
        height: "250px",
        border: "none",
      }}
    >
      <Form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "500px",
        }}
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Form.Item
            style={{ marginLeft: "10px", width: "100%", justifySelf: "center" }}
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            style={{ marginLeft: "10px", width: "100%", justifySelf: "center" }}
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
        </div>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => setOnSubmit(true)}
          >
            Submit
          </Button>
          {onSubmit ? (
            <Redirect from="/login" to="/home" />
          ) : (
            <Redirect to="/" />
          )}
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginForm;
