import React from "react";
import styles from "./profile.module.css";

function Social({ profile }) {
  return (
    <div>
      <h5 className={styles.socialTitle}>Social</h5>
      <div className={styles.social}>
        <div>
          <i className="fa fa-instagram" aria-hidden="true"></i>{" "}
          <b>
            {profile.socials === undefined ? "" : profile.socials.instagram}
          </b>
        </div>
        <div>
          <i className="fa fa-twitter" aria-hidden="true"></i>{" "}
          <b>{profile.socials === undefined ? "" : profile.socials.facebook}</b>
        </div>
        <div>
          <i className="fa fa-facebook" aria-hidden="true"></i>{" "}
          <b>{profile.socials === undefined ? "" : profile.socials.twitter}</b>
        </div>
      </div>
    </div>
  );
}

export default Social;
