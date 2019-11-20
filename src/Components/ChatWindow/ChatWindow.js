import React from 'react';

import store from '../../redux/store';
import Header from '../Header/Header';

import './ChatWindow';

const ChatWindow = ({ activeUserId }) => {

  const state = store.getState();
  const activeUser = state.contacts[activeUserId];

  return (
    <div className='Chat__Window'>
      <Header user={activeUser}/>
    </div>
  );
};

export default ChatWindow;