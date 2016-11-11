
import React from "react";
//import './module1';

export default class Content extends React.Component {

  handleChange(e){
    const title = e.target.value;
    console.log(title);
  //  this.props.changeTitle(title);
  //  this.setState(tite:title);
    this.props.changeTitle(title);
  }

  render(){
//    this.callFunc.changeTitle('faskflj');
    return(
      <div class="container">

        <br />
        <div class="row">
          <div class="col-sm-4">
            <input
                class="form-control"
                value={this.props.title}
                onChange={this.handleChange.bind(this)} />
            <p>
            {this.props.title}
          </p>
          </div>
        </div>
      </div>
    );
  }
}
