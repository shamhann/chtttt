import React from "react";
import styles from "./profile.module.css";

function Media() {
  return (
    <div>
      <h5 className={styles.mediaTitle}>Media</h5>
      <div className={styles.media}>
        <div className={styles.mediaBlue}></div>

        <div className={styles.mediaText}>
          <b>desktop-chat.pgf</b>
        </div>
      </div>
    </div>
  );
}

export default Media;
