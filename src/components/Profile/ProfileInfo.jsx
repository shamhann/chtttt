import React from "react";
import Name from "./Name";
import Social from "./Social";
import Media from "./Media";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";

function ProfileInfo({ profile }) {
  const open = useSelector((state) => state.application.open);

  return (
    <div className={"animate__animated animate__fadeInRightBig"}>
      <CSSTransition in={open} timeout={10} unmountOnExit classNames="my-node">
        <div className="animate__animated animate__fadeInRightBig">
          <Route exact path="/contact/:id?">
            <Name profile={profile} key={profile._id} />
            <Social profile={profile} />
            <Media />
          </Route>
        </div>
      </CSSTransition>
    </div>
  );
}

export default ProfileInfo;
