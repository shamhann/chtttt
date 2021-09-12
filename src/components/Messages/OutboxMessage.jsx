import React from 'react'
import {  useSelector } from 'react-redux'
import dayjs from 'dayjs';
import styles from './messages.module.css';
import PropTypes from 'prop-types'
import Avatar from '../App/Avatar'
import { useParams } from 'react-router-dom'

function OutboxMessage (props) {
  const readMessage = props.message.read;
  const timeSendMessage = props.message.time;
  const id = useParams().id;
  const contacts = useSelector((state) => state.contacts.contacts);
  const contact = contacts.find((contact) => contact._id === id);

  return (
    <div className={styles.Outbox} >
          <Avatar size={'small'} online={false} contact={contact} />
          <div className={styles.chatMsgMe}>
          <div className={styles.messageText}>{props.content}</div>
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