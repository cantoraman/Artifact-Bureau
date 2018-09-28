import React from 'react';
import DataSearch from './DataSearch';
import DataDisplay from './DataDisplay';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";


class DataLibrary extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchTerm: null,
      dataText : null
    }
    this.getWikiData = this.getWikiData.bind(this);
    this.setSearchTerm = this.setSearchTerm.bind(this);

  }

getWikiData(event) {
  event.preventDefault();

  const url = `https://en.wikipedia.org/w/api.php?action=parse&origin=*&section=0&prop=text&page=${this.state.searchTerm}&format=json`;
  fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((wikiData) => {
    if(wikiData.parse)
     this.setState({dataText: wikiData.parse.text["*"]})
  })
}

setSearchTerm(event) {
  this.setState({
    searchTerm: event.target.value
  })
}



  render(){
    return(
      <div className="data-library-body">
        <div className="data-library-title">DATA LIBRARY</div>
        <DataSearch getWikiData={this.getWikiData} searchKeyUp={this.setSearchTerm}/>
        <DataDisplay dataText={this.state.dataText} />
      </div>
    );
  }

}


export default DataLibrary;
