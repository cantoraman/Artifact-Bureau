import React from 'react';
import DataSearch from './DataSearch';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


class DataLibrary extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      placeholder : null
    }


    this.getWikiData = this.getWikiData.bind(this);
  }





getWikiData() {
  const url = `https://en.wikipedia.org/w/api.php?action=parse&origin=*&section=0&prop=text&page=pizza&format=json`;
  fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((words) => {
    // console.log(words.parse.text["*"]);
     this.setState({placeholder: words.parse.text["*"]})
  })
}




  render(){
    return(
      <div className="data-library">
        <p>Data Library be here...</p>
        <DataSearch
          getWikiData={this.getWikiData}/>

        { ReactHtmlParser(this.state.placeholder) }
      </div>
    );
  }

}

// render() {
//    const html = '<div>Example HTML string</div>';
//    return <div>{ ReactHtmlParser(html) }</div>;
//  }


export default DataLibrary;
