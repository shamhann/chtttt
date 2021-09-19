import React from "react";
import styles from "./messages.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Avatar from "../App/Avatar";
import PropTypes from "prop-types";
import "material-icons/iconfont/material-icons.css";
import dayjs from "dayjs";

function InboxMessage({ message }) {
  const readMessage = message.read;
  const timeSendMessage = message.time;
  const id = useParams().id;
  const contacts = useSelector((state) => state.contacts.contacts);
  const contact = contacts.find((contact) => contact._id === id);

  return (
    <div className={styles.Ibox}>
      <Avatar size={"small"} online={false} contact={contact} />
      <div className={styles.IboxMsge}>
        <div className={styles.messageText}>{message.content} </div>
        <div className={styles.messageTime}>
          {dayjs(timeSendMessage).format("HH:mm")}
        </div>
        <div>
          {readMessage === true ? (
            <div className={styles.check}>
              <span className="material-icons">done_all</span>
            </div>
          ) : (
            <div className={styles.check}>
              <span className="material-icons">check</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

InboxMessage.propTypes = {
  content: PropTypes.string.isRequired,
};
export default InboxMessage;
