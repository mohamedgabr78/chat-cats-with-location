import React, { useEffect, useRef, useState } from "react";
import "./Chat.scss";
import ChatBox from "./ChatBox";
import Send from "./Send";
import User from "./User";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [friends, setFriends] = useState("");
  const chatBoxScroll = useRef();

  const friendsSelectItems = [
    { label: "omar essam", value: "omar essam" },
    { label: "amr yasser", value: "amr yasser" },
    { label: "mohamed fathy", value: "mohamed fathy" },
    { label: "abdallah abaty", value: "abdallah abaty" },
  ];
  const replies = [
    "bolobif bolobif",
    "halo ya halo",
    "wel ya wel",
    "gg good game",
    "yes but sometimes no",
    "bolobif bolobif",
    "halo ya halo",
    "wel ya wel",
    "gg good game",
    "yes but sometimes no",
    "bolobif bolobif",
    "halo ya halo",
    "wel ya wel",
    "gg good game",
    "yes but sometimes no",
    "bolobif bolobif",
    "halo ya halo",
    "wel ya wel",
    "gg good game",
    "yes but sometimes no",
    "bolobif bolobif",
    "halo ya halo",
    "wel ya wel",
    "gg good game",
    "yes but sometimes no",
    "bolobif bolobif",
    "halo ya halo",
    "wel ya wel",
    "gg good game",
    "yes but sometimes no",
    "bolobif bolobif",
    "halo ya halo",
    "wel ya wel",
    "gg good game",
    "yes but sometimes no",
    "bolobif bolobif",
    "halo ya halo",
    "wel ya wel",
    "gg good game",
    "yes but sometimes no",
    "bolobif bolobif",
    "halo ya halo",
    "wel ya wel",
    "gg good game",
    "yes but sometimes no",
  ];
  const sendmessage = (e) => {
    e.preventDefault();
    // send message request to backend

    if (input !== "" && friends !== "" && friends) {
      setMessages([
        ...messages,
        { text: input, sender: "me", receiver: friends },
        {
          text: replies[getRandomIntInclusive(0, replies.length - 1)],
          sender: friends,
          receiver: "me",
        },
      ]);
    } else {
      let alertMessage =
        input === "" && (friends === "" || !friends)
          ? "choose a friend and type a mesage!"
          : input !== "" && (friends === "" || !friends)
          ? "choose a friend!"
          : input === "" && friends !== ""
          ? "type something to send!"
          : "";
      alert(alertMessage);
    }
    //
    setInput("");
  };

  useEffect(() => {
    chatBoxScroll.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat">
      <User
        friendsSelectItems={friendsSelectItems}
        friends={friends}
        setFriends={setFriends}
      />
      <ChatBox messages={messages} chatBoxScroll={chatBoxScroll} />
      <Send input={input} setInput={setInput} sendmessage={sendmessage} />
    </div>
  );
}

export default Chat;
