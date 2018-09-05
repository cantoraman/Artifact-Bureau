import React from 'react';

class ArtifactStorage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      storedArtifacts : []
    }
  }


  render(){
    return(
      <div className="artifact-storage">
        <p>Artifacts be here...</p>
      </div>
    );
  }

}



export default ArtifactStorage;
