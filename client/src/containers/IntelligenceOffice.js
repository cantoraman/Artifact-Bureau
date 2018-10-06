import React from 'react';
import SatelliteControl from '../components/SatelliteControl';
import ArtifactStorage from '../components/ArtifactStorage';
import SafeChannel from '../components/SafeChannel';
import DataLibrary from '../components/DataLibrary';
import PageTitle from '../components/PageTitle';
import WinMessage from '../components/WinMessage';

class IntelligenceOffice extends React.Component{
  constructor(props) {
    super(props)
}

  render(){
    return(
      <div className="intelligence-office-container">
        <PageTitle
          title="The Intelligence Office"
          description="" />
        <SatelliteControl
          artifacts={this.props.artifacts}
          artifactFound={this.props.artifactFound}/>
        <SafeChannel side="HQ"/>
        <DataLibrary />
        <ArtifactStorage />
        <WinMessage hasWon={this.props.hasWon}/>
      </div>
    );

  }

}

export default IntelligenceOffice;
