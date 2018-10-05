import React from 'react';


const ServerFolders = (props) => {

  const secretPictureExist = props.artifact.secretPicture;

  return(
    <div className="folder">
      <div>DECIPHERING: data{props.id}.dat</div>
      {props.artifact.secretMessage}
      <div>{secretPictureExist ? <img src={props.artifact.url} className="img-secret"/> : ""}</div>
      <div>data{props.id}.dat | FILE ENDS <br/><br/></div>
    </div>
  );

}


export default ServerFolders;
