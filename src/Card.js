import { Avatar } from "@material-ui/core";
import { MoreHoriz, Public } from "@material-ui/icons";
import React from "react";
import "./Card.css";
function Card({ name, imageUrl, description }) {
  return (
    <div className="card">
      <div className="top">
        <Avatar />
        <div className="info">
          <h4>{name}</h4>
          <p>{description}</p>
          <div>
            <p>22hr * </p>
            <Public />
          </div>
        </div>
        <MoreHoriz />
      </div>
      <div className="middle__feed">
        <p>{description}</p>
        <img src={imageUrl} alt="" />
      </div>
      <div className="bottom"></div>
    </div>
  );
}

export default Card;
