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
          locationName: "Rosetta"
        },
        {
          name: "The Crystal Skull",
          location: [41.009, 28.965],
          locationName: "Istanbul"
        },
        {
          name: "Horse of Selene",
          location: [48.208, 16.372],
          locationName: "Vienna"
        },
        {
          name: "The Sutton Hoo Helmet",
          location: [-27.125, -109.349],
          locationName: "Easter Island"
        },
        {
          name: "The Lewis Chessmen",
          location: [8.925, -79.549],
          locationName: "The Panama Canal"
        }
      ]
    }


  }


render(){
  return(
    <div className="intelligence-office-container">
      <PageTitle
        title="The Intelligence Office"
        description="HQ" />
      <SatelliteControl artifacts={this.state.artifacts} />
      <SafeChannel />
      <DataLibrary />
      <ArtifactStorage />
    </div>
  );

  }

}

export default IntelligenceOffice;
