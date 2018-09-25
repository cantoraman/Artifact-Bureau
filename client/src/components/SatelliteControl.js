import React from 'react';
import MapControl from './MapControl'
import SatelliteSearch from './SatelliteSearch'
import SatelliteScan from './SatelliteScan'
import ArtifactSelection from './ArtifactSelection'
import ScanMessage from './ScanMessage'

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
      artifactSelection: null,
      scanMessage: "Waiting Scanner...",
      opacity: 0
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
    this.scanForArtifact(this.state.artifactSelection);
  }

  scanForArtifact(artifactSelection){

    const artifact = artifactSelection;
    const markerLat = this.state.markerCoordinates[0];
    const markerLng = this.state.markerCoordinates[1];

      if(Math.abs(artifact.location[0]-markerLat)<this.state.scanSensitivity[1] && Math.abs(artifact.location[1]-markerLng)<this.state.scanSensitivity[1]){
        console.log(artifact);
        this.setState({
          scanMessage: "Artifact Found!"
        })
        this.props.artifactFound(artifact)
      }
      else
      {
        this.setState({
          scanMessage: "Scan Failed."
        })
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
          zoom={this.state.zoom}
        />
        <div className="sat-side-bar">
          <SatelliteSearch onSearchSubmit={this.submitSearch} />
          <div className="scan-for-txt">Scan For</div>
          <ArtifactSelection
            artifacts={this.props.artifacts}
            onSelectArtifact={this.artifactSelected}
            selectedArtifact={this.state.artifactSelection} />
          <SatelliteScan disabled={!this.state.markered || !this.state.artifactToScanSelected} onScanClicked={this.scanClicked} />
          <ScanMessage message={this.state.scanMessage} />
      </div>
      </div>
    );
  }
}

export default SatelliteControl;
