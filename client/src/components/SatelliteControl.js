import React from 'react';
import MapControl from '../controllers/MapControl'


class SatelliteControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentLocation : null
    }
  }


  render(){

    const position = [51.505, -0.09];
    return(
      <div className="sat-control">
        <MapControl />
      </div>

    );

  }

}



export default SatelliteControl;
