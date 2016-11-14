import React from "react";

export default class extends React.Component {

  render(){
    const {title} = this.props;

    return(
      <div class="col-md-4">
        <h2>
          {title}
        </h2>
        <p>
          Lorem ipsum dolor sit amet, fugit facilis senserit eu vix. Nullam facete vis no.
          At eum veniam oportere, ne nam ignota apeirian.
          Est accumsan adipisci te, at verterem consetetur pro.
        </p>
        <a href="#" class="btn btn-default">Les mer</a>
      </div>
    );
  }
}
