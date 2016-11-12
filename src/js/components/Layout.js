
import React from "react";
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

//import './module1';

export default class Layout extends React.Component {

  constructor(){
    super();
    this.state = {
      title: "Welcome Dlzar"
    };
  }

  changeTitle(title){
    this.setState({title});
  //  console.log(title);
  }

  render(){
    return(
      <div>
           <Header />
              <Content changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
              <Footer />
      </div>
    );
  }
}
