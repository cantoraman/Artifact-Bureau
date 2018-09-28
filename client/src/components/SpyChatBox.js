import React from 'react';

class SpyChatBox extends React.Component {

constructor(props){
  super(props);

  this.state={
    text: ''
  };

  this.handleTextChange = this.handleTextChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleTextChange(event){
  this.setState({
    text: event.target.value
  });
}

handleSubmit(evt){
  evt.preventDefault();
  const text = this.state.text.trim();
  if(!text) return;
  this.props.onSubmit(text);
  this.setState({ text: ''});
}
render(){
  return (
    <form
      className="chat-box"
      onSubmit={this.handleSubmit}>
      <input
        className="text-area"
        type="text"
        onChange={this.handleTextChange}
        value={this.state.text}
        placeholder="<safe_channel>"
      />
      <input
        className="text-submit"
        type="submit"
        name="submit"
        value="Send"
      />
    </form>
  )};

};

export default SpyChatBox;
