import React from 'react';
import ReactDom from "react-dom";
import Layout from './Layout';

class Index extends React.Component {
  constructor(){
    super();
    this.state = {
      name:"Dlzar",
      title:"her kommer info"
    };
  }

  render(){
  //  const name = "Dlzar";
    return(
      <div>
      <Layout name={this.state.name} title={this.state.title}/>
      <p>{this.state.name}</p>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDom.render(<Index />, app);
