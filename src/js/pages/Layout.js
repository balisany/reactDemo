import React from "react";
import Header from './Header';

export default class Layout extends React.Component {
  constructor(){
  	super();
  	this.state = {name:"Dlzar", title:"Velkommen"};
  }

  changeTitle(name){
  	this.setState({
  		name
  	});
  }

  render(){

    return(
    	<div>
      		<Header changeTitle={this.changeTitle.bind(this)} name={this.state.name} title={this.state.title}/>
      	</div>
    );
  }
}
