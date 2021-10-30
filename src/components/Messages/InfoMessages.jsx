import React from "react";
import styles from "./messages.module.css";
import PropTypes from "prop-types";

function InfoMessages({ content }) {
  return <div className={styles.messageDesign}>{content}</div>;
}
InfoMessages.propTypes = {
  content: PropTypes.string.isRequired,
};
export default InfoMessages;
