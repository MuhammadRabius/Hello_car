import React, { useState } from "react";
import {
  Route,
  Routes,
  useLocation,
  useResolvedPath,
  useRouteMatch,
} from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Dashboard.scss";
import SideBar from "../../component/Sidebar/Siderbar";
import Profile from "../Profile/Profile";
import Search from "./../../component/SearchComp/Search";
import CreateCar from "../CreateCar/CreateCar";
import CarLog from "./../CarLog/CarLog";
import UserDashboard from "../UserDashboard/UserDashboard";
import withAuth from "../../auth/withAuth";

const Dashboard = () => {
  const { path, url } = useResolvedPath("").pathname;
  //   #useResolvedPath("").pathname or useLocation
  const [h, setHeight] = useState(0);
  const [load, setLoad] = useState(false);
  const hideShow = (e) => {
    e.preventDefault();

    setLoad(!load);

    if (load) {
      setHeight(0);
      return;
    }

    const higt = document.getElementById("user__sidebar").scrollHeight;
    setHeight(higt);
  };

  return (
    <>
      {" "}
      <div className="dashboard">
        <div className="dashboard_container">
          <div className="dashboard__inner">
            <div
              className="user__sidebar"
              id="user__sidebar"
              style={{ height: `${h}px` }}
            >
              <SideBar
                url={url}
                setLoad={setLoad}
                load={load}
                setHeight={setHeight}
              />
            </div>

            <div className="menu__mb" onClick={hideShow}>
              <FaBars />
            </div>

            <div className="dashboard__body">
              <Routes>
                <Route index element={<Search />} />
                <Route path={`${path}`} element={<Search />} />
                <Route
                  path={`${path}/user-dashboard`}
                  element={<UserDashboard />}
                />
                <Route path={`${path}/create-car`} element={<CreateCar />} />
                <Route path={`${path}/car-log`} element={<CarLog />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(Dashboard);
