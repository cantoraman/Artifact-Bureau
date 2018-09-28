import React from 'react';

const SpyMessage = ({ sender, text }) => {
  return (
    <div className="message">
      <div>{sender}: {text}</div>
    </div>
  );
};

export default SpyMessage;
