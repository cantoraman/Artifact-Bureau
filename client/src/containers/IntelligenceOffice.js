import React from 'react';
import SatelliteControl from '../components/SatelliteControl'

class IntelligenceOffice extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      artifacts: []
    }


  }


render(){
  return(
    <div className="intelligence-office-container">
       <div id="mapid"></div>
      <p>Hello World!</p>
      <SatelliteControl />
    </div>
  );

  }

}

export default IntelligenceOffice;
