import React from "react";
import styles from "./search.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../redux/ducks/contacts";

function ContactsSearch() {
  const filter = useSelector((state) => state.contacts.filter);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <div className={styles.contactSearch}>
      <input
        type="text"
        className={styles.input}
        value={filter}
        onChange={(e) => handleChange(e)}
        placeholder="Search contact"
      />
    </div>
  );
}

export default ContactsSearch;
