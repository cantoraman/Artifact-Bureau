import React from 'react';
import Crest from '../helpers/but-crest.png';

const PageTitle = function (props) {
  return (
    <div className="page-title">
      <h3 id="deepshadow">{props.title} </h3>
      <h3>{props.description}</h3>

    </div>
  )
};

export default PageTitle;
