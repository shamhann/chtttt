import React from 'react'
import { useSelector } from 'react-redux'
import MessageInfo from './MessageInfo'
import InboxMessage from './InboxMessage'
import OutboxMessage from './OutboxMessage';
import PropTypes from 'prop-types';


function ContentBlock (props) {
  const profileId = useSelector((state) => state.application.profiles._id);
  const toUserId = props.message.toUserId;
  const loadingMessages = useSelector((state) => state.messages.loading);

  if (loadingMessages) {
    return '';
  }
  if (props.message.type === 'info') {
    return <MessageInfo content={props.message.content} />;
  }
  if (toUserId === profileId) {
    return (
      <InboxMessage  message={props.message}
                     content={props.message.content}
                     contact={props.contact} />
    );
  }
  return (
    <OutboxMessage message={props.message}
                   contact={props.contact}
                   content={props.message.content} />
  );
}

ContentBlock.propTypes = {
  message: PropTypes.object.isRequired,
};

export default ContentBlock