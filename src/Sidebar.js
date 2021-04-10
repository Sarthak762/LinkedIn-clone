import { Avatar } from "@material-ui/core";
import { Bookmark } from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
import { useStateValue } from "./StateProvider";
function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <div className="profile">
        <Avatar src={user.photoURL} />
        <h4>{user.displayName}</h4>
        <p>2nd year cse</p>
        <hr className="line" />
        <div className="info">
          <div className="connections">
            <div className="views">
              <span>Who viewed your profile </span>
              <span style={{ color: "blue" }}>42</span>
            </div>
          </div>
          <div className="connections">
            <div className="views">
              <span>Connections</span>
              <span style={{ color: "blue" }}>287</span>
            </div>
            <div
              style={{ fontWeight: "500", color: "black", marginLeft: "7px" }}
            >
              Grow your connections
            </div>
          </div>
        </div>
        <hr className="line" />
        <div className="premium">
          <p style={{ color: "#666565" }}>Access exclusive tools & insights</p>
          <p style={{ fontWeight: "600" }}>🟧Try premium free for 1 month</p>
        </div>
        <div className="profile__bottom">
          <Bookmark />
          <p style={{ fontWeight: "500" }}>My items</p>
        </div>
      </div>
      <div className="others"></div>
    </div>
  );
}

export default Sidebar;
