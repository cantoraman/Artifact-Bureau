import React from 'react';
import Artifact from './Artifact';

const ArtifactSelection = (props) => {

  const displayArtifacts = props.artifacts.map((artifact, index) => {
    return (
      <div>
        <Artifact
          artifact={artifact}
          handleSelect={props.onSelectArtifact}
          selectedArtifact={props.selectedArtifact}
          key={index}/>
      </div>
    )
  });



  // <input type="radio" checked={this.props.selectedArtifact === artifact.name} value={artifact.name} onChange={this.handleSelect} />
  // <p>{artifact.name}</p>


    return(
      <div className="artifact-selection-list">
        {displayArtifacts}
      </div>
    );

};


export default ArtifactSelection;
