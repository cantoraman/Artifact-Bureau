import React from 'react';

const PageTitle = function (props) {
  return (
    <div className="page-title">
      <h1 id="deepshadow">{props.title}</h1>
      <h3>{props.description}</h3>
    </div>

  )
};

export default PageTitle;
