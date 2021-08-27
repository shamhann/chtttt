import React from "react";
import PropTypes from "prop-types";

function InboxMessage(props) {

  return (
    <div>
      <div>
        <div>{props.content}</div>
      </div>
    </div>
  );
}

InboxMessage.propTypes = {
  content: PropTypes.string.isRequired,
};

export default InboxMessage;