import React from "react";
import styles from "./messages.module.css";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const loadingMessages = useSelector((state) => state.messages.loading);


  return (
    <div className={styles.header}>
      <div className={styles["header-center-block"]}>
        <div className={styles.messageAuthorName}>
          <div className={styles.messageAuthorNameTitle}>
            {loadingMessages ? (
              <div className={styles.headerLoading}>
                <span className="material-icons">cached</span>
                <div>Loading...</div>
              </div>
            ) : (
              <div className={styles.name}>
                кудузов ахмед
              </div>
            )}
          </div>
          <div className={styles.messageAuthorNameOnline}>
            {contacts?.online === true ? (
              <span className="material-icons">circle</span>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className={styles.messageSettings}>
          <span className="material-icons">
            settings
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;