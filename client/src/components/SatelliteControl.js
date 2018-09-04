import React from 'react';

class SatelliteControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentLocation : null
    }
  }




  render(){
    return(
      <div className="sat-control-container">
        <p>Hello Earth!</p>
      </div>
    );

    }

}

export default SatelliteControl;
