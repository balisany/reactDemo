import React from "react";
import Title from './Title';

export default class Header extends React.Component {

    handleChange(e){
      const name = e.target.value;
      this.props.changeTitle(name);
    }
  render(){
    return(
    	<header>
      		<Title name={this.props.name} title={this.props.title}/>

          <input  onChange={this.handleChange.bind(this)} />
      </header>
    );
  }
}
