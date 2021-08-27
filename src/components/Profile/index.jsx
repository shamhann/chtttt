import React, { useEffect } from 'react';
import styles from "./profile.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { loadProfile } from '../../redux/ducks/application';
import ProfileInfo from './ProfileInfo';

function Profile() {

    const dispatch = useDispatch();

    const profiles = useSelector(state => state.application.profiles);


    useEffect(() => {
        dispatch(loadProfile());
    },[])

    return (
      <div className={styles.profile}>
          {profiles.map(profile => {
              return  <ProfileInfo profile={profile} key={profile.id}/>
          })}
      </div>
    );
}

export default Profile;