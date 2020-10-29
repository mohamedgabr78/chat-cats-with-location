import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

function User({ friendsSelectItems, friends, setFriends }) {
  const userimage = (item) => (
    <div className="item">
      <span className={`label ${item.value === friends ? "active" : ""}`}>
        {item.label}
      </span>
      <FontAwesomeIcon
        className={`icon ${item.value === friends ? "active" : ""}`}
        icon={faUserSecret}
      />
    </div>
  );

  return (
    <div className="user">
      <Dropdown
        className="dropdown"
        value={friends}
        itemTemplate={userimage}
        options={friendsSelectItems}
        filter
        showClear
        onChange={(e) => {
          setFriends(e.target.value);
        }}
        placeholder="Select a friend"
      />
    </div>
  );
}

export default User;
