import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import { Button, Checkbox, Form, Input, message } from "antd";
import { LoginApi } from "../../API/api";

const Login = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const payload = {
      email: values.email,
      password: values.password,
    };
    console.log("payload:", payload);
    try {
      const res = await LoginApi(payload);

      if (res.status === 200) {
        message.success(res.data.message);
        sessionStorage.setItem("token", JSON.stringify(res.data.token));
        // navigate();
        window.location.replace("/dashboard");
      }
      message.error(res.message);
    } catch (error) {
      message.error(error.res.data.message);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login">
      <div className="login__form">
        <div className="login__ttile">
          <h2>Sign In</h2>
        </div>

        {/* <form action="" >
          <div className="form__group">
            <label htmlFor="email">Email or Phone</label>
            <input
              onChange={onChangeHandler}
              value={userData.email}
              type="text"
              name="email"
              id="email"
            />
            {error.email && ErrorMessage(error.email)}
          </div>

          <div className="form__group">
            <label htmlFor="password">Password</label>
            <input
              onChange={onChangeHandler}
              value={userData.password}
              type="password"
              name="password"
              id="password"
            />
            {error.password && ErrorMessage(error.password)}
          </div>

          <div className="form__group">
            <Link to="/forgot-password" className="forgot">
              Forgot Password
            </Link>
          </div>

          <div className="form__group">
            <button type="submit" className="btn">
              Sign In
            </button>
          </div>

          
        </form> */}
        <Form
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your username!",
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
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

        <div className="dont__have">
          <p>
            Don't have an Account?
            <Link to="/user-register"> Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
