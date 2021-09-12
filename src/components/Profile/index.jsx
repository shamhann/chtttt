import React, { useEffect } from 'react';
import styles from "./profile.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { loadProfile } from '../../redux/ducks/application';
import ProfileInfo from './ProfileInfo';
import { useParams } from 'react-router-dom'

function Profile() {

    const dispatch = useDispatch();
    const profiles = useSelector(state => state.contacts.contacts);
    const id = useParams().id;
    const filteredContacts = profiles.filter((contact) => contact._id === id);

    useEffect(() => {
        dispatch(loadProfile());
    },[dispatch])

    return (
            <div className={styles.profile}>
              {filteredContacts.map(profile => {
                  return  <ProfileInfo profile={profile} key={profile.id}/>
              })}
      </div>
    );
}

export default Profile;