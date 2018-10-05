import React from 'react';


const ServerFolders = (props) => {

  const secretPictureExist = props.artifact.secretPicture;

  return(
    <div className="folder">
      {props.artifact.secretMessage}
      {secretPictureExist ? <img src={props.artifact.url} className="img-thumbnails"/> : ""}
    </div>
  );

}


export default ServerFolders;
