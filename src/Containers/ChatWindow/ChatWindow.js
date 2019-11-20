import React from 'react';

import store from '../../redux/store';
import Header from '../../Components/Header/Header';
import Chats from '../../Components/Chats/Chats';

import './ChatWindow';

const ChatWindow = ({ activeUserId }) => {

  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMessages = state.messages[activeUserId]

  return (
    <div className='Chat__Window'>
      <Header user={activeUser}/>
      <Chats messages={activeMessages} />
    </div>
  );
};

export default ChatWindow;