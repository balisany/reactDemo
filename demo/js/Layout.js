import React from 'react';
import {Link} from "react-router";
import Header from './components/Header';

export default class Layout extends React.Component {
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
    const {history} = this.props;
//    console.log(history.isActive("users"));

      const containerStyle = {
        paddingTop: "30px"
      };

    return(
      <div>
      <Header location={location}/>
      <div class="container" style={containerStyle}>
        <div class="row">
          <div class="col-lg-8">
            {this.props.children}
          </div>
        </div>
      </div>
      </div>
    );
  }
}
