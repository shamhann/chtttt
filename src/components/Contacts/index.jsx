import React, { useEffect } from 'react'
import styles from './contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import FormContacts from './FormContacts'
import { loadContacts } from '../../redux/ducks/contacts';
import ContactBlock from './ContactBlock'


function Contacts(props) {
  const contacts = useSelector(state => state.contacts.contacts);
  const selectedId = useSelector(state => state.contacts.selectedContactsId);
  const dispatch = useDispatch();
  const handleSelectedContact =() => {
    dispatch((contacts._id))
  }
    useEffect(() => {
      dispatch(loadContacts())
    },[dispatch])
  return (
  <div onClick={handleSelectedContact}>
    {contacts.map(item => {
      return   <div className={styles.contacts}>
        <FormContacts />
          <div >
            <ContactBlock key={item.id} item={item}/>
        </div>
      </div>
    })}
  </div>
  );
}

export default Contacts;