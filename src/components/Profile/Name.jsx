import React from "react";
import styles from "./profile.module.css";

function Name({ profile }) {
  return (
    <div>
      <div className={styles.avatar}>
        {profile !== undefined ? profile.fullname.substr(0, 1) : null}
      </div>

      <h3 className={styles.name}>
        {profile !== undefined ? profile.fullname : null}
        <div className={styles.profileAuthorNameOnline}>
          {profile?.online === true ? <div> в сети<span className="material-icons">circle</span></div>: "был(а) недавно"}
        </div>
      </h3>
      <div className={styles.email}>
        {profile !== undefined ? <div>@{profile.username}</div> : null}
      </div>
      <div className={styles.icon}>
        <div>
          <i className="fa fa-phone" aria-hidden="true"></i>
        </div>
        <div>
          <i className="fa fa-video-camera" aria-hidden="true"></i>
        </div>
        <div>
          <i className="fa fa-envelope" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
}

export default Name;
