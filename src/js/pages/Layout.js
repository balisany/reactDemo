import React from "react"
import Nav from '../components/Nav'
import { connect } from "react-redux"

import { fetchUser, setUserName} from "../actions/userActions"
import { fetchTweets } from "../actions/tweetActions"

@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})

export default class Layout extends React.Component {
componentWillMount(){
//  this.props.dispatch(fetchUser())
}

fetchTweets(){
    this.props.dispatch(setUserName("Dlzar"))
   this.props.dispatch(fetchTweets())
}

  render(){
    const {user, tweets} = this.props;

    const {location} = this.props;
    const containerStyle = {
      marginTop : "20px"
    };

    if(!tweets.length){
    //  return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
    }

    const mappedTweets = tweets.map(tweet=> <li key={tweet.id}>{tweet.text}</li>)

    return(
    	<div>
      <Nav location={location} />
            <div class="container" style={containerStyle}>
              <div class="row">
                <div class="col-lg-12">
                  <button class="btn btn-success" onClick={this.fetchTweets.bind(this)}>load tweets</button>
                <h1>
                    {user.name}
                </h1>
                <ul>{mappedTweets}</ul>

                  {this.props.children}
                </div>
              </div>
            </div>
      </div>
    );
  }
}


 //	<Header changeTitle={this.changeTitle.bind(this)} name={this.state.name} title={this.state.title}/>
