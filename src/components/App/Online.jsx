import React from "react";
import styles from "../Sidebar/Contacts/contacts.module.css";

function Online({ contact }) {
  return (
    <div className={styles.messageAuthorNameOnline}>
      {contact?.online && <span className="material-icons">circle</span>}
    </div>
  );
}

export default Online;
