import React from 'react';

const Artifact = function (props) {

function handleRadioButton(){
  props.handleSelect(props.artifact);
}

if(!props) return null;

return (
  <div className='artifact'
    onClick={handleRadioButton}>
      <li className="animation">
      <input type="radio" value={props.artifact} checked={props.selectedArtifact == props.artifact}  />
      {props.artifact.name}
      &nbsp;
      &nbsp;
      &nbsp;
      <img src={props.artifact.url} alt= {props.artifact.name} className="img-thumbnails"/>
      </li>
  </div>
  )
}

export default Artifact;
