import React from 'react';
import styles from "./messages.module.css";
import { useDispatch, useSelector } from 'react-redux'
import { sendMessage } from '../../redux/ducks/messages'
import { useParams } from 'react-router-dom'
import PrintInput from './PrintInput'

function Print(props) {
  const dispatch = useDispatch();
  const messageText = useSelector((state) => state.messages.messageText);
  const contactId = useParams().id;
  const myId = useSelector((state) => state.application.profiles._id);

  const handleSendMessage = () => {
    dispatch(sendMessage(myId, contactId, messageText));
  };

    return (
        <div className={styles.footer}>
          <div className={styles.clip}>
            <span className="material-icons">attach_file</span>
          </div>
          <PrintInput/>
          <div className={styles.print}>
            {messageText === "" ? (
              <span className="material-icons">keyboard_voice</span>
            ) : (
              <span className="material-icons" onclick={handleSendMessage}>
            send
          </span>
            )}
          </div>
        </div>
    );
}

export default Print;