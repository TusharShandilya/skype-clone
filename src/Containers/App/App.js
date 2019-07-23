import React from 'react';
import _ from 'lodash';

import Sidebar from '../../Components/Sidebar/Sidebar';
import Main from '../../Components/Main/Main';

import store from '../../redux/store';

import './App.css';

const App = () => {
  const { contacts } = store.getState();
  
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main />
    </div>
  );
}

export default App;
