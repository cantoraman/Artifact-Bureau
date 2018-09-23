import React from 'react';

const Artifact = function (props) {

function handleRadioButton(){
  props.handleSelect(props.name);
}


if(!props) return null;

return (
  <div className='artifact'>
    <input type="radio" value={props.name} checked={props.selectedArtifact === props.name} onChange={handleRadioButton} />

    {props.name}

  </div>
  )
}

export default Artifact;
