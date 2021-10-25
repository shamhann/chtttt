import React from 'react'
import IncomingMessage from './IncomingMessage';
import OutboxMessage from './OutboxMessage';
import styles from "./messages.module.css";
import PropTypes from "prop-types";


function ContentBlock ({ message }) {
  return (
    <div>
      {message.type === "info" ? (
        <div className={styles.messageDesign}>{message.content}</div>
      ) : ""}
      <IncomingMessage message={message} />
      <OutboxMessage message={message} />
    </div>
  )
}
ContentBlock.propTypes = {
  message: PropTypes.object.isRequired,
};
export default ContentBlock


