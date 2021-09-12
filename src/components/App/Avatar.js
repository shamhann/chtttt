import React from "react";
import styles from '../Messages/messages.module.css'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

function Avatar({contact,size,online}) {
  const load = useSelector((state) => state.application.loading);

  return load ? (
    ""
  ) : (
    <div
      className={`${styles.avatar}  ${
        online ? styles.mediumonline : styles[size]
      }`}
    >
      {contact !== undefined ? contact.fullname.substr(0, 1) : null}
    </div>
  );
}

Avatar.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  contact: PropTypes.object,
  online: PropTypes.bool,
};

export default Avatar;
