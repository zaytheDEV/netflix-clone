import { useEffect, useState } from "react";
import "./Nav.css";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";

import { Link } from "react-router-dom";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_left">
        <Link to="/">
          <div className="nav_logo">
            <img
              src={process.env.PUBLIC_URL + "/580b57fcd9996e24bc43c529.png"}
              alt="Netflix Logo"
            />
          </div>
        </Link>
        <ul>
          <li>home</li>
          <li>TV shows</li>
          <li>movies</li>
          <li>new & popular</li>
          <li>My list</li>
        </ul>
      </div>
      <div className="nav_right">
        <SearchIcon style={{ fontSize: "1.5rem", color: "#fff" }} />
        <ul>
          <li>KIDS</li>
          <li>DVD</li>
        </ul>
        <NotificationsIcon
          style={{ fontSize: "1.5rem", color: "#fff", marginRight: "10px" }}
        />
        <Link to="/profile">
          <div className="nav_avatar">
            <img
              src={
                process.env.PUBLIC_URL + "/b677cd1cde292f261166533d6fe75872.png"
              }
              alt=""
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
