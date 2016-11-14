import React from "react";
import Article from '../components/Article';


export default class Featured extends React.Component {
  render(){

    const Artikler = [
      "Her kommer titel A",
      "Her kommer titel B",
      "Her kommer tiltel C"
    ].map((title, i) => <Article key={i} title={title}/>);

    const adtext = [
      "tekst paragaraf #1",
      "tekst paragaraf #2",
      "tekst paragaraf #3"
    ];

    const randomAd = adtext[Math.round(Math.random()* (adtext.length-1))];

    return(
    <div>
      <div class="row">
        <div class="col-lg-12">
          <div class="well text-center">
            {randomAd}
          </div>
        </div>
      </div>
      <div class="row">
        {Artikler}
      </div>
    </div>
    );
  }
}
