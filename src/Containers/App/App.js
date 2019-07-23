import React from "react";
import _ from "lodash";

import Sidebar from "../../Components/Sidebar/Sidebar";
import Main from "../../Components/Main/Main";

import store from "../../redux/store";

import "./App.css";

const App = () => {
  const { contacts, user, activeUserId } = store.getState();

  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
};

export default App;
