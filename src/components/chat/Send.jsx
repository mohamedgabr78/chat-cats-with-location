import React from "react";
import { InputText } from "primereact/inputtext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function Send(props) {
  const { input, setInput, sendmessage } = props;
  return (
    <form className="send" onSubmit={sendmessage}>
      <InputText
        className="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>
        send
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </form>
  );
}

export default Send;
