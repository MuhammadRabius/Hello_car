import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="login__form">
        <div className="login__ttile">
          <h2>Sign In</h2>
        </div>

        <form action="">
          <div className="form__group">
            <label htmlFor="email">Email or Phone</label>
            <input
              // onChange={onChangeHandler}
              // value={userData.email}
              type="text"
              name="email"
              id="email"
            />
            {/* {error.email && ErrorMessage(error.email)} */}
          </div>

          <div className="form__group">
            <label htmlFor="password">Password</label>
            <input
              // onChange={onChangeHandler}
              // value={userData.password}
              type="password"
              name="password"
              id="password"
            />
            {/* {error.password && ErrorMessage(error.password)} */}
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
        </form>

        <div className="dont__have">
          <p>
            Don't have an Account?
            <Link to="/"> Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
