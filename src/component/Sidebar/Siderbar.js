import React from "react";
import { NavLink } from "react-router-dom";
import { dashboard__link } from "../../archive_data/Dashboard";

import "./Sidebar.scss";

const SideBar = ({ url, load, setLoad, setHeight }) => {
  return (
    <div className="client__sidebar">
      <div className="sidebar__innner">
        {/* sidebar content  */}
        <div className="sidebar__content">
          <ul></ul>
          {dashboard__link.map((item, i) => {
            return (
              <li
                key={i}
                onClick={() => {
                  setLoad(!load);
                  setHeight(0);
                }}
              >
                <NavLink
                  to={`${url}${item.link}`}
                  exact
                  activeClassName="active"
                >
                  <span className="icon"> {item.icon}</span>
                  <span className="link__item">{item.title}</span>
                </NavLink>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
