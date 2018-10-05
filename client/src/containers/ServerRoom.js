import React from 'react';
import ServerFolders from '../components/ServerFolders'

const ServerRoom = (props) => {

const displayFolders = props.artifacts.map((artifact, index) => {
  return (
      <ServerFolders
        artifact={artifact}
        key={index}/>
  )
});

  return(
    <div className="server-room-container">
      {displayFolders}
    </div>
  );

}

export default ServerRoom;
