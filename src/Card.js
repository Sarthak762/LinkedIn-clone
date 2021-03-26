import { Avatar } from "@material-ui/core";
import { More, MoreHoriz, MoreVert, Public } from "@material-ui/icons";
import React from "react";
import "./Card.css";
function Card() {
  return (
    <div className="card">
      <div className="top">
        <Avatar />
        <div className="info">
          <h4>Sarthak dubey</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div>
            <p>22hr * </p>
            <Public />
          </div>
        </div>
        <MoreHoriz />
      </div>
      <div className="middle__feed">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam enim
          libero minus minima?
        </p>
        <img
          src="https://miro.medium.com/max/12032/0*__5nhm_2qHSrTVoZ"
          alt=""
        />
      </div>
      <div className="bottom"></div>
    </div>
  );
}

export default Card;
