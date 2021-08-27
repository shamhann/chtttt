import React from "react";
import styles from "./contacts.module.css";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectedContact } from '../../redux/ducks/contacts';

function Users(props) {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(selectedContact(props.contact._id))
  }
  return (
    <Link to={props.contact._id}>
      <li onClick={handleClick}>
        <div className={styles.users}>
          <div className={styles["users-avatar"]}>
            {props.contact.fullname.substr(0, 1)}
          </div>
          <div className={styles["users-names"]}>
            <div className={styles.fullname}>{props.contact.fullname}</div>
            <div>
              {" "}
              {props.contact.lastMessage === undefined
                ? ""
                : props.contact.lastMessage.content}
            </div>
          </div>

          <div className={styles["users-time"]}>14:12</div>
        </div>
      </li>
    </Link>
  );
}

export default Users;
