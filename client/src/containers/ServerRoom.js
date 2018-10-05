import React from 'react';
import ServerFolders from '../components/ServerFolders';
import SafeChannel from '../components/SafeChannel'

const ServerRoom = (props) => {

const displayFolders = props.artifacts.map((artifact, index) => {
  return (
      <ServerFolders
        artifact={artifact}
        key={index}
        id={index}/>
  )
});

  return(
    <div className="server-room-container">
      <div className="hacked-files">{displayFolders}</div>
      <SafeChannel side="s3rv3rR00M"/>
    </div>
  );

}

export default ServerRoom;
