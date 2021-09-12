import React from 'react'
import styles from './contacts.module.css'
import * as dayjs from 'dayjs';
import { NavLink } from "react-router-dom";
import { selectedContact } from '../../redux/ducks/contacts'
import { useDispatch, useSelector } from 'react-redux'

function ContactBlock (props) {
  const selected = useSelector((state) => state.contacts.selectedContactId);
  const dispatch = useDispatch();
  const handleSelectContact = () => {
    dispatch(selectedContact(props.item._id));
  };
  return (
   <li
     onClick={handleSelectContact}
     className={
       selected === props.item._id
         ? `${styles["contact-active"]} ${styles["contact-chat"]}`
         : ""
     }
   >
       <NavLink   style={{ textDecoration: 'none' }} to={`/contact/${props.item._id}`}>
         <div className={styles.users}>
         <div className={styles['users-avatar']}>{props.item !== undefined ? props.item.fullname.substr(0, 1) : null}</div>
         <div className={styles['users-names']}>
           <div className={styles.fullName}>{props.item.fullname}</div>
           <div className={styles['users-text']}>{props.item.lastMessage !== undefined ? props.item.lastMessage.content :
             null}</div>
         </div>

       <div className={styles['users-time']}> {dayjs(props.item.lastMessages?.time).format("HH:mm")}
       </div>
     </div>
       </NavLink>
   </li>
  )
}

export default ContactBlock