import React from "react";

function ChatBox({ messages, chatBoxScroll }) {
  return (
    <div className="ChatBox">
      <div className="messages-container">
        {messages &&
          messages.length > 0 &&
          messages.map((message, index) => {
            return (
              <div className="message" key={index}>
                <div className={message.sender === "me" ? "sent" : "delivered"}>
                  {message.text}
                </div>
                <span
                  className={message.sender === "me" ? "sent" : "delivered"}
                >
                  {message.sender}
                </span>
              </div>
            );
          })}
        <div id="scroll-aid" ref={chatBoxScroll}></div>
      </div>
    </div>
  );
}

export default ChatBox;
