import React from "react";
import IncomingMessage from "./IncomingMessage";
import OutboxMessage from "./OutboxMessage";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import InfoMessages from "./InfoMessages";

function MessageWrapper({ message }) {
  const profileId = useSelector((state) => state.application.profiles._id);

  const toUserId = message.toUserId;

  if (message.type === "info") {
    return <InfoMessages content={message.content} />;
  }

  if (toUserId === profileId) {
    return <IncomingMessage content={message.content} message={message} />;
  }
  return (
    <div>
      <OutboxMessage content={message.content} message={message} />
    </div>
  );
}
MessageWrapper.propTypes = {
  message: PropTypes.object.isRequired,
};
export default MessageWrapper;
