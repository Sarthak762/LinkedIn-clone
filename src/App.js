import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import News from "./News";
import Feed from "./Feed";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect, useState } from "react";
function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    console.log(user);
  }, [user]);
  return user ? (
    <>
      <div className="app">
        <Header />
        <div className="main__page">
          <Sidebar />
          <Feed />
          <News />
        </div>
      </div>
    </>
  ) : (
    <Login />
  );
}

export default App;
