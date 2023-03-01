import { Button, message } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IsToken, Logout } from "../../global_stage/action";
import "./Header.scss";

const Header = () => {
  const isSignIn = () => {
    return IsToken() ? (
      <>
        <li className="dropdown__menu">
          <span className="user">
            <FaUser />
          </span>

          <div className="dropdown">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="#" onClick={Logout}>
              Logout
            </Link>
          </div>
        </li>
      </>
    ) : (
      <li>
        {" "}
        <Link to="/user-login">Sign In</Link>
      </li>
    );
  };

  return (
    <div className="header">
      <div className="container">
        <div className="wrapper">
          {/* logo  */}
          <div>
            <Link to="/">
              <img
                className="logo"
                src="/images/logo/logo.png"
                alt="hello_car_logo"
              />
            </Link>
          </div>

          {/* menu  */}
          <div className="nav__menu">
            <ul>
              {/* <li>
                <Link to="/login">Sign In</Link>
              </li> */}
              {isSignIn()}
              {/* <Link to="/user-login">
                <Button type="primary">Login</Button>
              </Link> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
