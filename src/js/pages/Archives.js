import React from "react";

export default class Archives extends React.Component {
  render(){
//    console.log(this.props);
    const {query} = this.props.location;
    const {params}  = this.props;
    const {date, filter}  = query;
    return(
      <div>
        <h2>Arkiver har ({params.article})</h2>
        <p>
          date:{date}, filter: {filter}
        </p>
    </div>
    );
  }
}
