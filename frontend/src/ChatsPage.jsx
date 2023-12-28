import React from 'react';

import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    return (
      <div style={{ height: "100vh", width: "100vw" }}>
        <PrettyChatWindow
          projectId="ec8421b2-9503-4d15-9698-662006c8deb7"
          username={props.user.username} 
          secret={props.user.secret} 
          style={{ height: "100%" }}
        />
      </div>
    );
  };
  
  export default ChatsPage;