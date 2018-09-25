import React from 'react';

const SatelliteScan = (props) => {

  function handleChange(evt){
    props.onScanClicked();
  }

  return (
    <div className = "scan-button-container">
      <button
        disabled={props.disabled}
        className = "scan-button"
        onClick={handleChange}>Scan
      </button>
    </div>
    )

}




export default SatelliteScan;
