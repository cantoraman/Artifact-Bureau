import React from 'react';

const Artifact = function (props) {

function handleRadioButton(){
  props.handleSelect(props.artifact);
}

if(!props) return null;

return (
  <div className='artifact'>
    <input type="radio" value={props.artifact} checked={props.selectedArtifact == props.artifact} onChange={handleRadioButton} />
    {props.artifact.name}
  </div>
  )
}

export default Artifact;
