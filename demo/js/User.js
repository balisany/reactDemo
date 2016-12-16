import React from 'react';

export default class User extends React.Component {

  constructor(){
    super();
  }



  render(){
    const {name} = this.props;
    const {email} = this.props;
    const {phone} = this.props;
    return(
      <li class="list-group-item">
      <p>
        {name}
        <br />
        <span>{email}</span>
        <br />
        <span>{phone}</span>
      </p>

      </li>
    );
  }
}
