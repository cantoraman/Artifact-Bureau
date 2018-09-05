import React from 'react';

class SafeChannel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      message : null
    }
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
