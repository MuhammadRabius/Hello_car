import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "./Register.scss";
const Register = () => {
      
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="register_page">
        <div className="container">
          <div className="register_pg_content">
            <div className="register_banner">
              <img src="/images/logo/logo.png" alt="hello_car_logo" />
            </div>
            <div className="register_form">
              <Form
                layout="vertical"
                style={{ width: "100%" }}
                initialValues={{
                  remember: true,
                  layout: "vertical",
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Full Name"
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
                  label="Your Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                  ]}
                >
                  <Input type="email" />
                </Form.Item>

                <Form.Item
                  label="Phone Number"
                  name="ph_number"
                  rules={[
                    {
                      min: 11,
                      max: 11,
                      required: true,
                      message: "Please input valid number!",
                    },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>

                <Form.Item label="Your Car Model (Optional)" name="username">
                  <Input />
                </Form.Item>

                <Form.Item>
                  <Button
                    style={{ width: "100%" }}
                    type="primary"
                    htmlType="submit"
                  >
                    Regiser
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
