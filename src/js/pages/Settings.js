import React from "react";
import axios from "axios";
import InfiniteScroll from 'redux-infinite-scroll';
import Select2 from 'react-select2-wrapper';

export default class Settings extends React.Component {

    constructor(){
      super();
      this.state = {
        users:[],
        list: [3,4,5,6,7]
      };
    }

    componentWillMount(){
      axios.get("https://jsonplaceholder.typicode.com/photos")
        .then(res =>{
          this.setState({
            users: res.data
          })
        })
        const dmo =  this.state.users.map((msg) => {
          console.log(msg.id);
          return(
            <p>
              {msg}
            </p>
          )
        })
    }

    render(){
    const mappedTweets = this.state.users.map(photo=> <option key={photo.id}>{photo.title}</option>)
    return(
      <div>
        <h2>Innstllinger</h2>
        <Select2
        data={this.state.list}
      />
    </div>
    );
  }
}
