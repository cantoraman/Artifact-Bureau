import React from 'react';
import MapControl from './MapControl'
import SatelliteSearch from './SatelliteSearch'
import SatelliteScan from './SatelliteScan'

class SatelliteControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      coordinates : [51.505, -0.09],
      name : "London",
      currentLocation : null,
      markered : false,
      markerCoordinates: [],
      scanned : false,
      scanSensitivity: [0.5,0.5],
      zoom: 4
    }
    this.submitSearch = this.submitSearch.bind(this);
    this.mapClicked = this.mapClicked.bind(this);
    this.scanClicked = this.scanClicked.bind(this);
    this.scanForArtifact = this.scanForArtifact.bind(this);
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
        zoom: 10,
        coordinates: [locationData[0].lat, locationData[0].lon],
        name: locationData[0].display_name
      })
    });
  }

  mapClicked(event){
      if(!this.state.markered){
        this.setState({
        markered:true,
        markerCoordinates: [event.lat, event.lng]
        })
      }
      else{
        this.setState({
        markerCoordinates: [event.lat, event.lng]
        })
      }
  }

  scanClicked(){
    this.scanForArtifact();
  }

  scanForArtifact(){
    const artifacts = this.props.artifacts;

    const lat = this.state.markerCoordinates[0];
    const lng = this.state.markerCoordinates[1];


    for(let artifact of artifacts){
      if(Math.abs(artifact.location[0]-lat)<this.state.scanSensitivity[1] && Math.abs(artifact.location[1]-lng)<this.state.scanSensitivity[1]){
        console.log("SUCCESS");

      }

    }
  }


  render(){
    return(
      <div className="sat-control">
        <MapControl
          viewedLocation={this.state.coordinates}
          onMapClicked={this.mapClicked}
          markerCoordinates={this.state.markerCoordinates}
          markered={this.state.markered}
          zoom={this.state.zoom}/>
        <SatelliteSearch onSearchSubmit={this.submitSearch} />
        <SatelliteScan disabled={!this.state.markered} onScanClicked={this.scanClicked} />
      </div>
    );
  }
}

export default SatelliteControl;
