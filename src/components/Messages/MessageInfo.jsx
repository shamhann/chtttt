import React from "react";
import PropTypes from "prop-types";

function MessageInfo(props) {
  return <div>{props.content}</div>;
}

MessageInfo.propTypes = {
  content: PropTypes.string.isRequired,
};

export default MessageInfo;
