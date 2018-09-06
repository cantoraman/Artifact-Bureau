import React from 'react';
import MapControl from '../controllers/MapControl'
import SatelliteSearch from './SatelliteSearch'

class SatelliteControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      coordinates : [51.505, -0.09],
      name : "London"
    }
    this.submitSearch = this.submitSearch.bind(this);
  }

  submitSearch(event){


    const url = `https://nominatim.openstreetmap.org/search?q=${event}&format=json`;
    fetch(url)
    .then((res) => {
    return res.json();
    })
    .then((locationData) => {
      console.log(locationData[0].lat, locationData[0].lon);
      this.setState({
        coordinates: [locationData[0].lat, locationData[0].lon],
        name: locationData[0].display_name
      })
    });
  }

  render(){
    return(
      <div className="sat-control">
        <MapControl viewedLocation={this.state.coordinates}/>
        <SatelliteSearch onSearchSubmit={this.submitSearch}/>
      </div>
    );
  }
}

export default SatelliteControl;
