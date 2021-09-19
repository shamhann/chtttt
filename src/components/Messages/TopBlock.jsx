import React from "react";
import styles from "./messages.module.css";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ReactLoading from "react-loading";

function TopBlock(props) {
  const params = useParams().id;
  const contacts = useSelector((state) => state.contacts.contacts);
  const contact = contacts.find((contact) => contact._id === params);
  const loadingMessages = useSelector((state) => state.messages.loading);

  return (
    <div className={styles.header}>
      <div className={styles["header-center-block"]}>
        <div className={styles.headerIcons}>
          <Link to={"/"}>
            <div className="btn">
              <span className="material-icons">close</span>
            </div>
          </Link>
        </div>
        <div className={styles.messageName}>
          {loadingMessages ? (
            <div className={styles.headerLoading}>
              Подключение...
              <ReactLoading
                color="#c0c0c0"
                type="spin"
                width={16}
                height={16}
              />
            </div>
          ) : (
            <div className={styles.messageName}>
              <b> {contact?.fullname}</b>
              <div className={styles.messageAuthorNameOnline}>
                {contact?.online === true ? (
                  <span className="material-icons">circle</span>
                ) : (
                  ""
                )}
              </div>
            </div>
          )}
        </div>
        <div className={styles.headerIcons}>
          <span className="material-icons">call</span>
          <span className="material-icons">menu</span>
        </div>
      </div>
    </div>
  );
}

export default TopBlock;
