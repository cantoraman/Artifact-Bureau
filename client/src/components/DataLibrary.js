import React from 'react';

class DataLibrary extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      placeholder : null
    }
  }


  render(){
    return(
      <div className="data-library">
        <p>Data Library be here...</p>
      </div>
    );
  }

}



export default DataLibrary;
