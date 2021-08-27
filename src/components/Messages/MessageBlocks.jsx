import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import MessageInfo from './MessageInfo';
import InboxMessage from './InboxMessage';
import OutboxMessage from './OutboxMessage';


function MessagesBlocks(props) {
  const profileId = useSelector((state) => state.profile.profile._id);
  const toUserId = props.message.toUserId;
  const loadingMessages = useSelector((state) => state.message.loading);

  if (loadingMessages) {
    return "";
  }
  if (props.message.type === "info") {
    return <MessageInfo content={props.message.content} />;
  }
  if (toUserId === profileId) {
    return (
      <InboxMessage content={props.message.content} contact={props.contact} />
    );
  }
  return (
    <OutboxMessage message={props.message} content={props.message.content} />
  );
}

MessagesBlocks.propTypes = {
  message: PropTypes.object.isRequired,
};

export default MessagesBlocks;
