import React from "react";
import "./Home.scss";
import Cats from "../cats/Cats";
import Chat from "../chat/Chat";
import Location from "../location/Location";

function Home() {
  return (
    <div className="home">
      <div className="main-container">
        <Cats />
        <Location />
      </div>
      <Chat />
    </div>
  );
}

export default Home;
