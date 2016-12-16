import React from 'react';

export default class Post extends React.Component {

  constructor(){
    super();
  }

  render(){
    const {title, text, link} = this.props;
    return(
      <div class="col-md-4">
          <h2> {title}</h2>
          <p>{text}</p>
          <a class="btn btn-default" href="#">les mer.... </a>
      </div>
    );
  }
}
