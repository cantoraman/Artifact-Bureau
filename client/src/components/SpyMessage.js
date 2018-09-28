import React from 'react';

const SpyMessage = ({ side, text }) => {
  return (
    <div className="message">
      <div>{side}: {text}</div>
    </div>
  );
};

export default SpyMessage;
