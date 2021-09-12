import React from 'react';
import styles from './messages.module.css';
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Avatar from '../App/Avatar'
import PropTypes from 'prop-types';
import 'material-icons/iconfont/material-icons.css';


function InboxMessage (props) {
  const id = useParams().id;
  const contacts = useSelector((state) => state.contacts.contacts);
  const contact = contacts.find((contact) => contact._id === id);

  return (
    <div className={styles.chatMsg}>
      <div className={styles.MsgMe}>
        <div >
          <Avatar size={'small'} online={false} contact={contact} />
        </div>
        <div>
          <div>{props.content}</div>
        </div>
      </div>
    </div>
  );
}

InboxMessage.propTypes = {
  content: PropTypes.string.isRequired,
};
export default InboxMessage