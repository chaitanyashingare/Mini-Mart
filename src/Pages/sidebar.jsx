import React from "react";
import * as AiIcons from "react-icons/ai";
import { Box } from "@chakra-ui/react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import SidebarData from "./SidebarData";
import SidebarData2 from "./SidebarData2";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import { Navigate, useNavigate } from "react-router";
const Sidebar = ({ sidebar, showSidebar }) => {
  const val = JSON.parse(localStorage.getItem("Jio Mart User"));
  const navigate = useNavigate();
  return (
    <Box zIndex={999}>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <div className="navbar-toggle">
            <div className="menu-bars2">
              <div id="closeicon">
                <div id="inline">
                  <p id="contact-icon">
                    <AccountCircleOutlinedIcon />
                  </p>
                  <p id="contact-text"> {val ? `${val}` : "Hello,  Sign in"}</p>
                  <p id="contact-cross">
                    {" "}
                    <AiIcons.AiOutlineClose />
                  </p>
                </div>
              </div>
            </div>
            <div className="sidebuttons">
              <button
                className="sidebuttonss"
                onClick={() => navigate("/user")}
              >
                Accounts
              </button>
            </div>
          </div>

          <div>
            {SidebarData.map((item, index) => {
              return (
                <Link key={index} to={item.link}>
                  <li key={index} className={item.cName}>
                    {item.icon}
                    <span>{item.title}</span>
                  </li>
                </Link>
              );
            })}
            <br />
            <hr />
            {SidebarData2.map((item, index) => {
              return (
                <Link key={index} to={item.link}>
                  <li key={index} className={item.cName}>
                    {item.icon}
                    <span>{item.title}</span>
                  </li>
                </Link>
              );
            })}
            <br />
            <hr />
            <div id="side-cont">
              <h3 style={{ fontWeight: 800 }}>CONTACT US</h3>
              <p>
                WhatsApp us:<span className="side-color">82618 81241</span>
              </p>
              <p>
                Call Us : <span className="side-color">82618 81241</span>
              </p>
              <p>8:00 AM to 8:00 PM, 365 days</p>
              <p>
                Shopkeeper :-<b>Darshan Warjurkar</b>
              </p>
              <p>
                Manager :-<b>Chaitanya Shingare</b>
              </p>
              <br />
              <hr />
            </div>
          </div>
        </ul>
      </nav>
    </Box>
  );
};

export default Sidebar;
