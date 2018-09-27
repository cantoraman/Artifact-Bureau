import React from 'react';
import DataSearch from './DataSearch';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { BrowserRouter as Router, Route } from "react-router-dom";


class DataLibrary extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchTerm: null,
      placeholder : null
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
  .then((words) => {
    // console.log(words.parse.text["*"]);
     this.setState({placeholder: words.parse.text["*"]})
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
        <div className="data-library-title">Data Library</div>
        <DataSearch
          getWikiData={this.getWikiData}
          searchKeyUp={this.setSearchTerm}
        />
        { ReactHtmlParser(this.state.placeholder) }
        <Router>
          <Route
              path="/wiki"
              render={()=><DataSearch getWikiData={this.getWikiData} searchKeyUp={this.setSearchTerm}/>}
            />
        </Router>
      </div>
    );
  }

}

// render() {
//    const html = '<div>Example HTML string</div>';
//    return <div>{ ReactHtmlParser(html) }</div>;
//  }


export default DataLibrary;
