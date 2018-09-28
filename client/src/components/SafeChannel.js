import React from 'react';
import SpyChatBox from '../components/SpyChatBox';
import SpyMessage from '../components/SpyMessage';
import io from 'socket.io-client';


class SafeChannel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      message: null,
      messages: []
  };


  this.socket = io('http://localhost:3001');
      this.socket.on('spychat', this.addNewMessage.bind(this));
      this.submitMessage = this.submitMessage.bind(this);
      this.setMessage = this.setMessage.bind(this);
  }

  setMessage(event) {
    this.setState({
      message: event.target.value
    });
  }

  addNewMessage(message){
    const messages = this.state.messages;
    const newMessages = [...messages, ...[message]];
    this.setState({
      messages: newMessages
    });
  }



  submitMessage(event) {
    event.preventDefault();
    if (this.state.message) {
      const newMessage = {
         sender: this.props.side,
         text: this.state.message
       };
      this.socket.emit('spychat', newMessage);
    }
  }




  render(){
    const allMessages = this.state.messages.map((message, index) => {
      return (
        <SpyMessage
          sender={message.sender}
          key={index}
          text={message.text}
        />
      );
    });

  return(
    <div className="safe-channel">
      <SpyChatBox
        setMessage={this.setMessage}
        onSubmit={this.submitMessage}
      />
      {allMessages}
    </div>);
  }

}


export default SafeChannel;
