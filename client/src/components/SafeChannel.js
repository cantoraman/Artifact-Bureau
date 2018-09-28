import React from 'react';
import SpyChatBox from '../components/SpyChatBox';
import SpyMessage from '../components/SpyMessage';
import io from 'socket.io-client';


class SafeChannel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      side: null,
      message: null,
      messages: []
  };
  }









  render(){
    return(
      <div className="safe-channel">
        <p>Messages be here...</p>
      </div>
    );
  }

}



export default SafeChannel;
