import React from 'react';
import SatelliteControl from '../components/SatelliteControl';
import SatelliteControl from '../components/ArtifactStorage';
import SatelliteControl from '../components/SafeChannel';
import SatelliteControl from '../components/DataLibrary';
import PageTitle from '../components/PageTitle';

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
      <PageTitle
        title="The Intelligence Office"
        description="HQ" />
      <SatelliteControl />
      <SafeChannel />
      <DataLibrary />
      <ArtifactStorage />
    </div>
  );

  }

}

export default IntelligenceOffice;
