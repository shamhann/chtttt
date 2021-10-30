import React from "react";
import dayjs from "dayjs";
import styles from "./messages.module.css";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { removeMessage } from "../../redux/ducks/messages";

function OutboxMessage({ message }) {
  const dispatch = useDispatch();
  const messageId = message._id;

  const { time, read } = message;

  const handleDeleteMessage = () => {
    dispatch(removeMessage(messageId));
  };
  const loadingDeleteMessage = useSelector(
    (state) => state.messages.loadingDeleteMessages
  );
  return (
    <div className={styles.Outbox}>
      <div className={styles.OutboxMessage}>
        <div className={styles.messageText}>{message.content} </div>
        <div>
          <div className={styles["time-check"]}>
            <button
              className={styles.deleteButton}
              onClick={handleDeleteMessage}
            >
              <span className="material-icons">
                {loadingDeleteMessage ? "auto_delete" : "delete"}
              </span>
            </button>
            <div className={styles.messageTime}>
              {dayjs(time).format("HH:mm")}
            </div>
            <div className={styles.check}>
              <span className="material-icons">
                {read ? "done_all" : "check"}{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

OutboxMessage.propTypes = {
  message: PropTypes.object,
};

export default OutboxMessage;
