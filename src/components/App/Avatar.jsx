import React from "react";
import PropTypes from "prop-types";

function Avatar({ contact }) {
  return <div>{contact.fullname.substr(0, 1)}</div>;
}

Avatar.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  contact: PropTypes.object,
  online: PropTypes.bool,
};

export default Avatar;
