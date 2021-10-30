import React, { useEffect } from "react";
import { loadContacts } from "../../../redux/ducks/contacts";
import { useDispatch, useSelector } from "react-redux";
import ListContacts from "./ListContacts";
import styles from "./contacts.module.css";

function Contacts() {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => {
    return state.contacts.contacts.filter(
      (contact) =>
        contact.fullname
          .toUpperCase()
          .indexOf(state.contacts.filter.toUpperCase()) > -1
    );
  });

  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);

  return (
    <div className={styles.contactScroll}>
      <ul>
        {contacts.map((contact) => {
          return <ListContacts contact={contact} key={contact._id} />;
        })}
      </ul>
    </div>
  );
}

export default Contacts;
