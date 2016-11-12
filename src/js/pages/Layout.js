import React from "react";
import Nav from '../components/Nav';

export default class Layout extends React.Component {


  render(){
    const {location} = this.props;
    const containerStyle = {
      marginTop : "20px"
    };

    return(
    	<div>
      <Nav location={location} />
            <div class="container" style={containerStyle}>
              <div class="row">
                <div class="col-lg-12">
                  <h1>
                    Overskrift
                  </h1>
                  {this.props.children}
                </div>
              </div>
            </div>
      </div>
    );
  }
}


 //	<Header changeTitle={this.changeTitle.bind(this)} name={this.state.name} title={this.state.title}/>
