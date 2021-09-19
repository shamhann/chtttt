import React, { useEffect, useState } from "react";
import styles from "./contacts.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loadContacts } from "../../redux/ducks/contacts";
import ContactBlock from "./ContactBlock";

function Contacts(props) {
  const contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const filteredContacts = contacts.filter((contact) => {
    return contact.fullname?.toLowerCase().includes(value.toLowerCase());
  });

  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);

  return (
    <div className={styles.contactScroll}>
      <div className={styles.contactSearch}>
        <input
          className="contactForm"
          type="text"
          placeholder={"Search contact"}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>

      {filteredContacts.map((contact) => {
        return (
          <ul>
            <ContactBlock contact={contact} key={contact._id} />
          </ul>
        );
      })}
    </div>
  );
}

export default Contacts;
