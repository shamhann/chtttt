import React from "react";
import dayjs from "dayjs";
import styles from "./messages.module.css";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { removeMessage } from "../../redux/ducks/messages";
import ReactLoading from "react-loading";

function OutboxMessage({ message }) {
  const dispatch = useDispatch();
  const messageId = message._id;

  const readMessage = message.read;
  const timeSendMessage = message.time;

  const profileId = useSelector((state) => state.application.profiles._id);
  const toUserId = message.toUserId;

  const handleDeleteMessage = () => {
    dispatch(removeMessage(messageId));
  };
  const loadingDeleteMessage = useSelector(
    (state) => state.messages.loadingDeleteMessages
  );
  return (
    <div className={styles.Outbox}>
      {toUserId !== profileId ? (
        <div className={styles.OutboxMsge}>
          <div className={styles.messageText}>{message.content} </div>
          <div>
            <div className={styles['time-check']}>
              <button className={styles.deleteButton} onClick={handleDeleteMessage}>
                {loadingDeleteMessage ? (
                  <span className="material-icons">auto_delete</span>
                ) : (
                  <span className="material-icons">delete</span>
                )}
              </button>
              <div className={styles.messageTime}>
                {dayjs(timeSendMessage).format("HH:mm")}
              </div>
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
      ) : ""}

    </div>
  );
}

OutboxMessage.propTypes = {
  message: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
};

export default OutboxMessage;
