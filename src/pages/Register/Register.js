import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import "./Register.scss";
import { useNavigate } from "react-router-dom";
import { userRegister } from "../../API/api";
const Register = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { email, username, password, phoneNumber, carModel } = values;

    const payload = {
      email: email,
      username: username,
      password: password,
      phoneNumber: phoneNumber,
      cardModel: carModel,
    };

    console.log("payload", payload);

    try {
      const res = await userRegister(payload);
      console.log("res", res);
      message.success(res.data.message);
      // navigate("/user-login");
    } catch (err) {
      console.log(err);
      message.error(err.res.message);
    }
  };

  return (
    <>
      <div className="register_page">
        <div className="container">
          <div className="register_pg_content">
            {/* Image container-- Left*/}
            <div className="register_banner">
              <img src="/images/logo/logo.png" alt="hello_car_logo" />
            </div>

            {/* Registration Form for new User--Right */}
            <div className="register_form">
              <div>
                <h1>Sign Up</h1> <hr style={{ marginBottom: "20px" }} />
              </div>
              <Form
                layout="vertical"
                style={{ width: "100%" }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                //     onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="User Name"
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
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input unique password",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  label="Phone Number"
                  name="phoneNumber"
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

                <Form.Item label="Your Car Model (Optional)" name="carModel">
                  <Input />
                </Form.Item>

                <Form.Item>
                  <Button
                    style={{ width: "100%" }}
                    type="primary"
                    htmlType="submit"
                  >
                    Register
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
