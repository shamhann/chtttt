import React from "react";
import styles from "./contacts.module.css";
import * as dayjs from "dayjs";
import { NavLink } from "react-router-dom";
import { selectedContact } from "../../redux/ducks/contacts";
import { useDispatch, useSelector } from "react-redux";

function ContactBlock({ contact }) {
  const selected = useSelector((state) => state.contacts.selectedContactId);
  const dispatch = useDispatch();
  const toUserId = contact.toUserId;
  const profileId = useSelector((state) => state.application.profiles._id);

  const handleSelectContact = () => {
    dispatch(selectedContact(contact._id));
  };
  return (
    <li
      onClick={handleSelectContact}
      className={
        selected === contact._id
          ? `${styles["contact-active"]} ${styles["contact-chat"]}`
          : ""
      }
    >
      <NavLink
        style={{ textDecoration: "none" }}
        to={`/contact/${contact._id}`}
      >
        <div className={styles.users}>
          <div className={styles["users-avatar"]}>
            <div className={styles.messageAuthorNameOnline}>
              {contact?.online === true ? (
                <span className="material-icons">circle</span>
              ) : (
                ""
              )}
            </div>
            {contact !== undefined ? contact.fullname.substr(0, 1) : null}
          </div>
          <div className={styles["users-names"]}>
            <div className={styles.fullName}>{contact.fullname}</div>
            <div className={styles["users-text"]}>
              {toUserId === profileId ? "вы:" : ""}
              {contact.lastMessage !== undefined
                ? contact.lastMessage.content
                : null}
            </div>
          </div>

          <div className={styles["users-time"]}>
            {" "}
            {dayjs(contact.lastMessages?.time).format("HH:mm")}
          </div>
        </div>
      </NavLink>
    </li>
  );
}

export default ContactBlock;
