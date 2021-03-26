import { Avatar } from "@material-ui/core";
import { Assignment, Event, Photo, YouTube } from "@material-ui/icons";
import React from "react";
import Card from "./Card";
import "./Feed.css";
function Feed() {
  return (
    <div className="feed">
      <div className="input">
        <div className="input__top">
          <Avatar />
          <input placeholder="Share a post" />
        </div>
        <div className="input__bottom">
          <div className="option__container">
            <Photo style={{ color: "blue" }} />
            Photo
          </div>
          <div className="option__container">
            <YouTube style={{ color: "green" }} />
            Video
          </div>
          <div className="option__container">
            <Event style={{ color: "orange" }} />
            Event
          </div>
          <div className="option__container">
            <Assignment style={{ color: "pink" }} />
            Article
          </div>
        </div>
      </div>
      <hr className="line" />
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Feed;
