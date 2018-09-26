import React from 'react';

class DataLibrary extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      placeholder : null
    }


    this.getWikiData = this.getWikiData.bind(this);
  }





getWikiData(selectedTheme) {
  const url = `https://en.wikipedia.org/w/api.php?action=parse&origin=*&section=0&prop=text&page=pizza&format=json`;
  fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((words) => {
    this.setState({placeholder: words})
  })
}




  render(){
    return(
      <div className="data-library">
        <p>Data Library be here...</p>
        {this.state.placeholder}
      </div>
    );
  }

}



export default DataLibrary;
