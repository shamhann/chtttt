import React from "react";
import Messages from "../Messages";
import Profile from "../Profile";
import styles from "./app.module.css";
import { Switch, Route } from "react-router-dom";
import Contacts from "../Sidebar";

function App() {
  return (
    <div className={styles.app}>
      <Switch>
        <Route exact path="/contact/:id?">
          <div className={styles.contacts}>
            <Contacts />
          </div>
          <div className={styles.messages}>
            <Messages />
          </div>
          <div className={styles.profile}>
            <Profile />
          </div>
        </Route>
        <Route>
          <div className={styles.contacts}>
            <Contacts />
          </div>
          <div className={styles.noSelectedChat}>
            <div className={styles.chatNan}>
              Please, select a chat to start messaging
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
