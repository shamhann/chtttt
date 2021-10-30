import React from "react";
import styles from "./messages.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import { profileOpen } from "../../redux/ducks/application";
import Online from "../App/Online";

function TopBlock() {
  const params = useParams().id;
  const contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();
  const contact = contacts.find((contact) => contact._id === params);
  const loadingMessages = useSelector((state) => state.messages.loading);

  const open = useSelector((state) => state.application.open);

  const handleClickOpen = () => {
    dispatch(profileOpen(open));
  };

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
              <Online contact={contacts} id={contacts._id} />
            </div>
          )}
        </div>
        <div className={styles.headerIcons}>
          <span className="material-icons">call</span>
          <button onClick={() => handleClickOpen()}>
            <span className="material-icons">menu</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopBlock;
