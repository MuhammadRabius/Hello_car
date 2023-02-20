import { Button, message } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [check, setCheck] = useState(false);
  const [amount, setAmount] = useState("");

  // const isSignIn = () => {
  //   return IsToken() ? (
  //     <>
  //       <div className="amount" onClick={checkBalance}>
  //         <span className={`dot ${check ? "animation" : ""}`}>৳</span>
  //         <div className="tap">{check ? amount : "Check balance"}</div>
  //       </div>

  //       <li className="dropdown__menu">
  //         <span className="user">
  //           <FaUser />
  //         </span>

  //         <div className="dropdown">
  //           <Link to="/dashboard">Dashboard</Link>
  //           <Link to="/dashboard/user-booking">My Booking</Link>
  //           <Link to="/dashboard/change-password">Change Password</Link>

  //           <Link to="#" onClick={Logout}>
  //             Logout
  //           </Link>
  //         </div>
  //       </li>
  //     </>
  //   ) : (
  //     <li>
  //       {" "}
  //       <Link to="/login">Sign In</Link>
  //     </li>
  //   );
  // };

  return (
    <div className="header">
      <div className="container">
        <div className="wrapper">
          {/* logo  */}
          <div>
            <Link>
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
              {/* {isSignIn()} */}
              <Link to="/user-login">
                <Button type="primary">Login</Button>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
