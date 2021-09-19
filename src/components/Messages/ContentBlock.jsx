import React from "react";
import { useSelector } from "react-redux";
import InboxMessage from "./InboxMessage";
import OutboxMessage from "./OutboxMessage";
import PropTypes from "prop-types";
import styles from "./messages.module.css";

function ContentBlock({ message }) {
  const profileId = useSelector((state) => state.application.profiles._id);
  const toUserId = message.toUserId;
  const loadingMessages = useSelector((state) => state.messages.loading);

  if (loadingMessages) {
    return "";
  }
  if (message.type === "info") {
    return <div className={styles.messageDesign}>{message.content}</div>;
  }
  if (toUserId === profileId) {
    return <InboxMessage message={message} />;
  }
  return <OutboxMessage message={message} />;
}

ContentBlock.propTypes = {
  message: PropTypes.object.isRequired,
};

export default ContentBlock;
