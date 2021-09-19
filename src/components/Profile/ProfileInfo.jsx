import React from "react";
import Name from "./Name";
import Social from "./Social";
import Media from "./Media";
import { Route } from "react-router-dom";

function ProfileInfo({ profile }) {
  return (
    <div className="animate__animated animate__fadeInRightBig">
      <Route exact path="/contact/:id?">
        <Name profile={profile} key={profile.id} />
        <Social profile={profile} />
        <Media />
      </Route>
    </div>
  );
}

export default ProfileInfo;
