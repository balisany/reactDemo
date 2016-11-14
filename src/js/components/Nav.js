import React from "react";
import {indexLink, Link} from "react-router";

export default class Nav extends React.Component {
  constructor(){
  	super();
  	this.state = {
      collappsed: true,
      name:"Dlzar",
      title:"Velkommen"
    };
  }

  toggleCollapse(){
    const collappsed = !this.state.collappsed;
    this.setState({collappsed});
  }

  changeTitle(name){
  	this.setState({
  		name
  	});
  }

  navigate(){
    this.props.history.replace(null,"/");
    //console.log(this.props.route.path);
  }
  render(){
    const {location} = this.props;
    const {collappsed} = this.state;
    const feautedClass = location.pathname === "/" ? "active" : "";

    return(
      <div>

      <br />
      <Link to="/">
      <button class="btn btn-danger">
      hjem
      </button>
      </Link>
          <Link to="archives" activeClassName="active">
            <button class="btn btn-primary">
              Archives
            </button>
          </Link>
          <Link to="settings" activeClassName="active">
            <button class="btn btn-primary">
              Settings
          </button>
        </Link>
        </div>
    );
  }
}
