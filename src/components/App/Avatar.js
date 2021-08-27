import React from "react";

function Avatar({contact,size,online}) {
  return <div>
    {contact !== undefined ?  contact.fullname.substr(0,1) : null}
  </div>;
}

export default Avatar;
