import React from 'react';
import Name from './Name';
import Social from './Social';
import Media from './Media';

function ProfileInfo (props) {
  return (
    <div>
      <Name profile={props.profile} key={props.profile.id}/>
      <Social profile={props.profile} />
      <Media contact={props.contact}/>
    </div>
  );
}

export default ProfileInfo;