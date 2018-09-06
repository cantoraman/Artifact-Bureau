
import React from 'react';

class SatelliteSearch extends React.Component {
constructor(props){
  super(props);

  this.state={
    searchLocation:''
  };
  this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleAuthorChange(evt){
  this.setState({
    author: evt.target.value
  });
}

handleSearchTextChange(event){
  this.setState({
    searchLocation: event.target.value
  });
}

handleSubmit(evt){
  evt.preventDefault();
  const searchLocation = this.state.searchLocation.trim();
  if(!searchLocation) return;
  this.props.onSearchSubmit(searchLocation);
  this.setState({
    searchLocation: ''
  });
}

render(){
  return (
    <form className="search-form" onSubmit={this.handleSubmit}>
      <input
        type="text"
        onChange={this.handleSearchTextChange}
        placeholder="Enter location..."
      />
      <input
        type="submit"
        name="submit"
        value="Search"
      />
    </form>

  );
}

}


export default SatelliteSearch;
