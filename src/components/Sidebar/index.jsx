import React from "react";
import ContactsSearch from "./Search/ContactsSearch";
import Contacts from "./Contacts/Contacts";

function Sidebar() {
  return (
    <div>
      <ContactsSearch />
      <Contacts />
    </div>
  );
}
export default Sidebar;
