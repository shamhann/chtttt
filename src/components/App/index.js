import React from "react";
import Contacts from "../Contacts";
import Messages from "../Messages";
import Profile from "../Profile";
import styles from "./app.module.css";

function App(props) {
  return (
      <div className={styles.app}>
        <div className={styles.wrapper}>
          <div className={styles.contacts}><Contacts /></div>
          <div className={styles.messages}><Messages /></div>
          <div className={styles.profile}><Profile /></div>
        </div>
      </div>
  )

}

export default App;
