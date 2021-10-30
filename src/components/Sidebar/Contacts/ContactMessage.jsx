import React from "react";
import styles from "./contacts.module.css";
import { useSelector } from "react-redux";

function ContactMessage({ contact }) {
  const toUserId = contact.toUserId;
  const profileId = useSelector((state) => state.application.profiles._id);
  return (
    <div className={styles["users-text"]}>
      {toUserId === profileId ? "вы:" : ""}
      {contact.lastMessage !== undefined && contact.lastMessage.content}
    </div>
  );
}

export default ContactMessage;
