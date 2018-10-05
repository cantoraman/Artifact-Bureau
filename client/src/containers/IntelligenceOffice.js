import React from 'react';
import SatelliteControl from '../components/SatelliteControl';
import ArtifactStorage from '../components/ArtifactStorage';
import SafeChannel from '../components/SafeChannel';
import DataLibrary from '../components/DataLibrary';
import PageTitle from '../components/PageTitle';

class IntelligenceOffice extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      artifacts: [
        {
          name: "The Rosetta Stone",
          location: [31.404, 30.416],
          locationName: "Rosetta",
          lost: true,
          url: require('../helpers/Rosetta_Stone.JPG')
        },
        {
          name: "The Crystal Skull",
          location: [41.009, 28.965],
          locationName: "Istanbul",
          lost: true,
          url: require('../helpers/crystal_skull.jpg')
        },
        {
          name: "Horse of Selene",
          location: [48.208, 16.372],
          locationName: "Vienna",
          lost: true,
          url: require('../helpers/horse_of_Selene.jpg')
        },
        {
          name: "The Sutton Hoo Helmet",
          location: [-27.125, -109.349],
          locationName: "Easter Island",
          lost: true,
          url: require('../helpers/Sutton_hoo_helmet.jpg')
        },
        {
          name: "The Lewis Chessmen",
          location: [8.925, -79.549],
          locationName: "The Panama Canal",
          lost: true,
          url: require('../helpers/Chessmen.jpg')
        }
      ]
    }

    this.artifactFound = this.artifactFound.bind(this);
  }


artifactFound(foundArtifact){
  for (var artifact of this.state.artifacts)
  {
    if(artifact.name === foundArtifact.name){
      let newArtifact=artifact;
      newArtifact.lost=false;
      this.setState({
        artifact: newArtifact
      });
    }
  }
}


render(){
  return(
    <div className="crt">
    <div className="intelligence-office-container">
      <PageTitle
        title="The Intelligence Office"
        description="" />
      <SatelliteControl
        artifacts={this.state.artifacts}
        artifactFound={this.artifactFound}/>
      <SafeChannel side="HQ"/>
      <DataLibrary />
      <ArtifactStorage />
    </div>
  </div>
  );

  }

}

export default IntelligenceOffice;
