import React from 'react';

export default class Users extends React.Component {

  constructor(){
    super();
  }

  render(){
  //  this.props.changeTitle("New");
  //  const {title} = this.props;
  //  const {text} = this.props;
    const {query} = this.props.location;
    const {params} = this.props
    const {user} = params;
    const {date, filter} = query;
//    console.log(this.props);
     return(
      <header>
      <h1>
        Brukere
      </h1>
      <p>
        {user}
      </p>
      <p>
        Dato: {date} <br />
        Filter: {filter}
      </p>
      </header>
    );
  }
}
