import React from 'react';
import Post from './../components/Post';

export default class Posts extends React.Component {

  constructor(){
    super();
    this.state ={
          title:"Dlzar Balisany",
          text: "Her kommer masse kule ting",
          link: "www.vg.no"
    }
  }

  render(){
    const posts = [{
      title:"Dlzar Balisany",
      text: "Her kommer masse kule ting",
      link: "www.vg.no"
    }, {
      title:"Dlzar",
      text: "Her kommer masse kule ting",
      link: "www.vg.no"
    },{
      title:"Petter",
      text: "Her kommer masse kule ting",
      link: "www.vg.no"
    }
  ].map((item,i) => <Post key={i} title={item.title}
        text={item.text}
        link={item.link} />);

  //  this.props.changeTitle("New");
    return(
      <div>
      <header>
      <h1>
        Nyheter
      </h1>
      </header>
      {posts}
      </div>
    );
  }
}
