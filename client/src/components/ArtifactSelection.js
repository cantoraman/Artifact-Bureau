import React from 'react';
import Artifact from './Artifact';

const ArtifactSelection = (props) => {
  // {
  //   name: "The Lewis Chessmen",
  //   location: [8.925, -79.549],
  //   locationName: "The Panama Canal",
  //   state: "lost"
  // }



  // handleSelect(){
  //   console.log(change.target.value);
  // //  props.onSelectArtifact(artifact.name);
  // }

  const displayArtifacts = props.artifacts.map((artifact, index) => {
    return (
      <div>
        <Artifact
          name={artifact.name}
          url={artifact.url}
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
