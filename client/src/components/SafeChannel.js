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
  this.scrollToBottom = this.scrollToBottom.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  }


  addNewMessage(message){
    const messages = this.state.messages;
    const newMessages = [...messages, ...[message]];
    this.setState({
      message: null,
      messages: newMessages
    });
  }
  
  onSubmit(message){
    if (message) {
      const newMessage = {
         sender: this.props.side,
         text: message
       };
      this.socket.emit('spychat', newMessage);
      this.setState({
        message: null
      });
    }
  }





  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({behavior: "smooth", block: "end"});
  }
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
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

      <div className="message-list">
        {allMessages}
        <div style={{}}
             ref={(element) => { this.messagesEnd = element; }}>
        </div>
      </div>
      <SpyChatBox
        onSubmit={this.onSubmit}
      />

    </div>);
  }

}


export default SafeChannel;
