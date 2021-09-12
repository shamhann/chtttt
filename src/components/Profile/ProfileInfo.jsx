import React from 'react';
import Name from './Name';
import Social from './Social';
import Media from './Media';
import { Route } from "react-router-dom";

function ProfileInfo (props) {
  return (
    <div className='animate__animated animate__fadeInRightBig'>
     <Route exact path="/contact/:id?" >
       <Name profile={props.profile} key={props.profile.id}/>
       <Social profile={props.profile}  />
       <Media contact={props.contact}/>
     </Route>
    </div>
  );
}

export default ProfileInfo;