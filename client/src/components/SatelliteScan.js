import React from 'react';

const SatelliteScan = (props) => {

  function handleChange(evt){
    props.onScanClicked();
  }

  return (
    <button
      disabled={props.disabled}
      className = "scan-button"
      onClick={handleChange}>Scan
    </button>
    )

}




export default SatelliteScan;
