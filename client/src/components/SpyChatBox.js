import React from 'react';

const SpyChatBox = ({ onSubmit, setMessage }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        onKeyUp={setMessage}
        placeholder="<safe_channel>"
      />
      <input
        type="submit"
        name="submit"
        value="Send"
      />
    </form>
  );
};

export default SpyChatBox;
