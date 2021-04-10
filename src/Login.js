import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { useStateValue } from "./StateProvider";
import { auth, provider } from "./firebase";
import { actions } from "./reducer";
import { ContactSupportOutlined } from "@material-ui/icons";

function Login() {
  const [{ user }, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({ type: actions.SET_USER, user: result.user });
        console.log("Sign in successful");
        console.log(user);
      })
      .catch(console.log("Sign in failed"));
  };

  return (
    <div className="login">
      <Button onClick={signIn}>Sign in with google</Button>
    </div>
  );
}

export default Login;
