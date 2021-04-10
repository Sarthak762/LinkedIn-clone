import { Avatar } from "@material-ui/core";
import { Assignment, Event, Photo, YouTube } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Feed.css";
import Modal from "./Modal";
import { useStateValue } from "./StateProvider";
import Pusher from "pusher-js";
import axios from "axios";
const API_URL = "https://linkedinclonereact.herokuapp.com/posts";
function Feed() {
  const [{ user }, dispatch] = useStateValue();
  const [showPhotobox, setShowPhotoBox] = useState(false);
  const [posts, setPosts] = useState([]);
  const handleClose = () => {
    setShowPhotoBox(false);
  };
  const fetchData = () => {
    axios.get(API_URL).then((res) => {
      setPosts(res.data);
    });
  };
  useEffect(() => {
    // Pusher.logToConsole = true;
    const pusher = new Pusher("8e508ad1411a7ae62a9f", {
      cluster: "ap2",
    });
    pusher.subscribe("post").bind(
      "inserted",
      (data) => {
        console.log(data);
        fetchData();
      },
      []
    );
  });
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="feed">
        <div className="input">
          <div className="input__top">
            <Avatar src={user.photoURL} />
            <input placeholder="Share a post" />
          </div>
          <div className="input__bottom">
            <div
              className="option__container"
              onClick={() => setShowPhotoBox(true)}
            >
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
          {posts.map((post) => (
            <Card
              name={post.name}
              imageUrl={post.imageUrl}
              description={post.description}
            />
          ))}
        </div>
        <Modal show={showPhotobox} handleClose={handleClose} />
      </div>
    </>
  );
}

export default Feed;
