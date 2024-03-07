import React, { useState, useEffect } from "react";
import { Chat } from "../data/index";
import Style from "./index.module.scss";
let ChatInstance = new Chat();

setTimeout(() => {
  ChatInstance.publish(1, "online");
}, 3000);

function FriendStatus({ id }) {
  const [person, setPerson] = useState({
    name: "",
    status: "loading...",
  });

  useEffect(() => {
    console.log("id", id);
    ChatInstance.addListener(id, handlePerson);

    return () => {
      ChatInstance.removeListener(id, handlePerson);
      console.log("removeListener");
    };
  }, []);

  function handlePerson(user) {
    setPerson(user);
  }

  return (
    <div className={Style.container}>
      <div>我是{person.name}</div>
      <div>{person.status}</div>
    </div>
  );
}

export default FriendStatus;
