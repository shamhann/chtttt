import React from "react";
import dayjs from "dayjs";
import styles from "./messages.module.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeMessage } from "../../redux/ducks/messages";

function OutboxMessage({ message }) {
  const dispatch = useDispatch();
  const messageId = message._id;

  const readMessage = message.read;
  const timeSendMessage = message.time;

  const handleDeleteMessage = () => {
    dispatch(removeMessage(messageId));
  };
  return (
    <div className={styles.Outbox}>
      <div className={styles.OutboxMsge}>
        <div className={styles.messageText}>{message.content} </div>
        <div className={styles.messageTime}>
          {dayjs(timeSendMessage).format("HH:mm")}
        </div>
        <div>
          <button className={styles.deleteButton} onClick={handleDeleteMessage}>
            <span className="material-icons">delete</span>
          </button>
          {readMessage === true ? (
            <div className={styles.check}>
              <span className="material-icons">done_all</span>
            </div>
          ) : (
            <div className={styles.check}>
              <span className="material-icons">check</span>
            </div>
          )}
          <div className={styles.delete}></div>
        </div>
      </div>
    </div>
  );
}

OutboxMessage.propTypes = {
  message: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
};

export default OutboxMessage;
