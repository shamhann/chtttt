import React from 'react'
import {  useSelector } from 'react-redux'
import dayjs from 'dayjs';
import styles from './messages.module.css';
import PropTypes from 'prop-types'

function OutboxMessage (props) {
  const readMessage = props.message.read;
  const timeSendMessage = props.message.time

  return (
    <div className={styles.Outbox} >
          <div className={styles.OutboxMsge}>
          <div className={styles.messageText}>{props.content} </div>
          <div className={styles.messageTime}>
            {dayjs(timeSendMessage).format('HH:mm')}
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
      {/*<div className={styles.deleteButton} onClick={handleDeleteMessage}>*/}
      {/*  <span className="material-icons">clear</span>*/}
      {/*</div>*/}
    </div>
  );
}

OutboxMessage.propTypes = {
  message: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
};



export default OutboxMessage