import React from "react";
import styles from "./messages.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Avatar from "../App/Avatar";
import PropTypes from "prop-types";
import "material-icons/iconfont/material-icons.css";
import dayjs from "dayjs";

function IncomingMessage({ message }) {
  const time = message.time;
  const id = useParams().id;
  const contacts = useSelector((state) => state.contacts.contacts);
  const contact = contacts.find((contact) => contact._id === id);

  return (
    <div>
      <div className={styles.Incoming}>
        <div className={styles.avatar}>
          <Avatar size={"small"} online={false} contact={contact} />
        </div>
        <div className={styles.IncomingMessage}>
          <div className={styles.messageText}>{message.content} </div>
          <div className={styles.messageTime}>
            {dayjs(time).format("HH:mm")}
          </div>
        </div>
      </div>
    </div>
  );
}

IncomingMessage.propTypes = {
  message: PropTypes.object,
};
export default IncomingMessage;
