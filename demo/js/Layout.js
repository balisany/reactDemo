import React from 'react';

export default class Layout extends React.Component {

  constructor(){
    super();
  }

  render(){
    const {title} = this.props;
    return(
      <h1>
        {title}
      </h1>
    );
  }
}
