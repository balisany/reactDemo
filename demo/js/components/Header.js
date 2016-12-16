import React from "react";
import {Link} from "react-router";
//import './module1';

export default class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      name:"Dlzar",
      title:"her kommer info",
      text: "Her kommer masse tekst",
      users: []
    };
  }

  render(){
      const {location} = this.props;
      console.log(location);
    return(
      <div>
      <Link to="/">
        <button class="btn btn-danger">hjem</button>
      </Link>
      <Link to="users">
        <button class="btn btn-primary">Brukere</button>
      </Link>
      </div>
    );
  }
}
