import React from 'react';

import './Chats.css';

const Chats = ({ messages }) => {
  return (
    <div>
      <p>{messages}</p>
    </div>
  );
}

export default Chats;