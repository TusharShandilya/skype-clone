import React from "react";

import Empty from "../Empty/Empty";
import ChatWindow from "../../Containers/ChatWindow/ChatWindow";

import "./Main.css";

const Main = ({ user, activeUserId }) => {
  return (
    <main className="Main">
      {!activeUserId ? (
        <Empty user={user} activeUserId={activeUserId} />
      ) : (
        <ChatWindow user={user} activeUserId={activeUserId} />
      )}
    </main>
  );
};

export default Main;
