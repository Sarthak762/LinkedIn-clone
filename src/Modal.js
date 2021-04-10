import { Button, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import "./Modal.css";
import { useStateValue } from "./StateProvider";
import { storage } from "./firebase";
import firebase from "firebase";
import axios from "axios";
function Modal({ show, handleClose }) {
  const [showImage, setShowImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [{ user }] = useStateValue();
  const oninput = (e) => {
    const file = e.target.files[0];
    setShowImage(file);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };
  const upload = (file) => {
    const storageRef = storage.ref();
    const metadata = {
      contentType: "image/jpeg",
    };
    const uploadTask = storageRef
      .child("images/" + file.name)
      .put(showImage, metadata);
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED:
            console.log("Upload is pasused");
            break;
          case firebase.storage.TaskState.RUNNING:
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            break;
          case "storage/canceled":
            break;
          case "storage/unknown":
            break;
        }
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);
          axios.post("https://linkedinclonereact.herokuapp.com/posts", {
            name: user.displayName,
            imageUrl: downloadURL,
            description: "ddkmcdkcmd",
          });
          alert("post uploaded successfully");
        });
      }
    );
  };
  useEffect(() => {
    console.log(imageUrl);
  }, [imageUrl]);
  return (
    <div
      className={
        show
          ? "modal__container display-block"
          : "modal__container display-none "
      }
    >
      <div className="modal">
        <div className="modal__top">
          <h3>Edit your Photo</h3>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </div>
        <div
          className="modal__middle"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <label for="myfile" style={showImage && { display: "none" }}>
            Select images to share
          </label>
          <input
            type="file"
            id="myfile"
            name="myfile"
            hidden
            onChange={oninput}
          ></input>
        </div>
        <div className="modal__bottom">
          <Button variant="outlined">Cancel</Button>
          <Button
            variant="outlined"
            onClick={() => {
              upload(showImage, user.name);
              handleClose();
              setImageUrl(null);
              setShowImage(null);
            }}
          >
            Done
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
