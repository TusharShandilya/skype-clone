import React from 'react';
import _ from 'lodash';

import store from '../../redux/store';
import Header from '../../Components/Header/Header';
import Chats from '../../Components/Chats/Chats';

import './ChatWindow.css';
import MessageInput from '../MessageInput/MessageInput';

const ChatWindow = ({ activeUserId }) => {

  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMessages = state.messages[activeUserId]
  const { typing } = state;

  return (
    <div className='ChatWindow'>
      <Header user={activeUser}/>
      <Chats messages={_.values(activeMessages)} />
      <MessageInput value={typing}/>
    </div>
  );
};

export default ChatWindow;