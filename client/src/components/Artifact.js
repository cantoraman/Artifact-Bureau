import React from 'react';

const Artifact = function (props) {

function handleRadioButton(){
  props.handleSelect(props.artifact);
}

if(!props) return null;

return (
  <div className='artifact'>
    <div>
      <input type="radio" value={props.artifact} checked={props.selectedArtifact == props.artifact} onChange={handleRadioButton} />
    {props.artifact.name}
    </div>
    <img src={props.artifact.url} alt= {props.artifact.name} className="img-thumbnails"/>
  </div>
  )
}

export default Artifact;
