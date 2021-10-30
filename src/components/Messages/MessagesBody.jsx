import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadMessages } from "../../redux/ducks/messages";
import styles from "./messages.module.css";
import MessageWrapper from "./MessageWrapper";

function MessagesBody() {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages.messages);
  const contactsId = useParams().id;
  useEffect(() => {
    dispatch(loadMessages(contactsId));
  }, [contactsId, dispatch]);

  return (
    <div className={styles.chatContainer}>
      <div>
        {messages.map((message) => {
          return <MessageWrapper message={message} key={message._id} />;
        })}
      </div>
    </div>
  );
}

export default MessagesBody;
