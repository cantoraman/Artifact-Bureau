import React from 'react';
import Artifact from './Artifact';

const ArtifactSelection = (props) => {


  const displayArtifacts = props.artifacts.map((artifact, index) => {
    return (

        <Artifact
          artifact={artifact}
          handleSelect={props.onSelectArtifact}
          selectedArtifact={props.selectedArtifact}
          key={index}/>

    )
  });



  // <input type="radio" checked={this.props.selectedArtifact === artifact.name} value={artifact.name} onChange={this.handleSelect} />
  // <p>{artifact.name}</p>


    return(
      <div
        className="artifact-selection-list"
        id="panel">
          <div className="scan-for-txt">Scan For</div>
        {displayArtifacts}
      </div>
    );

};


export default ArtifactSelection;
