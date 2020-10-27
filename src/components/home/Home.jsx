import React from "react";
import Cats from "../cats/Cats";
import Chat from "../chat/Chat";
import Location from "../location/Location";

function Home() {
  return (
    <div>
      <Cats />
      <Chat />
      <Location />
    </div>
  );
}

export default Home;
