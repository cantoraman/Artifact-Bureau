import React from 'react';
import MapControl from './MapControl'
import SatelliteSearch from './SatelliteSearch'
import SatelliteScan from './SatelliteScan'
import ArtifactSelection from './ArtifactSelection'

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
      zoom: 4,
      artifactToScanSelected: false,
      artifactSelection: null
    }
    this.submitSearch = this.submitSearch.bind(this);
    this.mapClicked = this.mapClicked.bind(this);
    this.scanClicked = this.scanClicked.bind(this);
    this.scanForArtifact = this.scanForArtifact.bind(this);
    this.artifactSelected = this.artifactSelected.bind(this);
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
    this.setState({markerCoordinates: [event.lat, event.lng]});
    if(!this.state.markered){
      this.setState({
      markered:true,
      })
    }

  }

  artifactSelected(event){
    console.log(event);
    this.setState({
    artifactSelection: event
    });
    if(!this.state.artifactToScanSelected){
      this.setState({
      artifactToScanSelected:true,
      })
    }
  }

  scanClicked(){
    this.scanForArtifact(this.artifactSelection);
  }

  scanForArtifact(artifactSelection){
  //  const artifacts = this.props.artifacts;
    const artifact = artifactSelection;
    const lat = this.state.markerCoordinates[0];
    const lng = this.state.markerCoordinates[1];

//    for(let artifact of artifacts){
      if(Math.abs(artifact.location[0]-lat)<this.state.scanSensitivity[1] && Math.abs(artifact.location[1]-lng)<this.state.scanSensitivity[1]){
        this.setState({
          isArtifactFound: true
        });
      }
  //  }
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
        <p>Scan For</p>
        <ArtifactSelection
          artifacts={this.props.artifacts}
          onSelectArtifact={this.artifactSelected}
          selectedArtifact={this.state.artifactSelection} />
        <SatelliteScan disabled={!this.state.markered} onScanClicked={this.scanClicked} />
      </div>
    );
  }
}

export default SatelliteControl;
