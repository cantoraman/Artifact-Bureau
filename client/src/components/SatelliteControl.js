import React from 'react';
import MapControl from '../controllers/MapControl'
import SatelliteSearch from './SatelliteSearch'


class SatelliteControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentLocation : [51.505, -0.09]
    }

    this.submitSearch = this.submitSearch.bind(this);
    this.locationKeyUp = this.locationKeyUp.bind(this);
  }

  submitSearch(event){
    event.preventDefault();
    console.log("search submitted");
  }
  locationKeyUp(){
    console.log("location typed");
  }

  render(){


    return(
      <div className="sat-control">
        <MapControl viewedLocation={this.state.currentLocation}/>
        <SatelliteSearch onSubmit={this.submitSearch} onLocationKeyUp={this.locationKeyUp}/>
      </div>

    );

  }

}



export default SatelliteControl;
