import React from "react";
import styles from "./contacts.module.css";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import ContactMessage from "./ContactMessage";
import Online from "../../App/Online";
import Time from "./Time";
import Avatar from "../../App/Avatar";

function ListContacts({ contact }) {
  return (
    <li>
      <NavLink
        style={{ textDecoration: "none" }}
        to={`/contact/${contact._id}`}
      >
        <div className={styles.users}>
          <div className={styles["users-avatar"]}>
            <Online contact={contact} id={contact._id} />
            <Avatar contact={contact} />
          </div>
          <div className={styles["users-names"]}>
            <div className={styles.fullName}>{contact.fullname}</div>
            <ContactMessage contact={contact} id={contact._id} />
          </div>

          <Time contact={contact} />
        </div>
      </NavLink>
    </li>
  );
}
ListContacts.propTypes = {
  contact: PropTypes.object,
};

export default ListContacts;
