import React from 'react';


const WinMessage = function (props) {
  if(props.hasWon)
    return (<div className="win-text"><p className="stroke-behind">ALL ARTIFACTS ARE SECURE!</p></div>)
  return null;
};

export default WinMessage;
