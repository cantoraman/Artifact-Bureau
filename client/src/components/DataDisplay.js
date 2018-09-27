import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


const DataDisplay = function (props) {

function setNewSearch(event){
  props.getWikiData(event);
}

const unparsedHTML = props.dataText;

const regex = /href/g;
var targetedHTML = "";

if(unparsedHTML!=null)
  targetedHTML = unparsedHTML.replace(regex, 'href="#"');


  return (
    <div className='data-display'>
      {ReactHtmlParser(targetedHTML)}
    </div>
  )

}

export default DataDisplay;
