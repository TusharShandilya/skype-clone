import React from "react";

import User from '../../Containers/User/User';

import "./Sidebar.css";

const Sidebar = ({ contacts }) => {
  return (
    <aside className="Sidebar">
      {contacts.map(contact => {
        return (<User user={contact} key={contact.user_id} />)
        })
      }
    </aside>
  );
};

export default Sidebar;
