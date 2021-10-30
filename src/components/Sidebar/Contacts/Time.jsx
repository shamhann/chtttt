import React from "react";
import * as dayjs from "dayjs";
import styles from "./contacts.module.css";

function Time({ contact }) {
  return (
    <div className={styles["users-time"]}>
      {dayjs(contact.lastMessages?.time).format("HH:mm")}
    </div>
  );
}

export default Time;
