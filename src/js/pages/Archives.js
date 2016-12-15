import React from "react";
import Article from '../components/Article';
import { connect } from "react-redux"
import { fetchUser} from "../actions/userActions"

@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched
  };
})

export default class Archives extends React.Component {
  componentWillMount(){
    this.props.dispatch(fetchUser())
  }
  render(){

    const {query} = this.props.location;
    const {params}  = this.props;
    const {article} = params;
    const {date, filter}  = query;
    const {user} = this.props;
    const Artikler = user.map(item => <Article key={item.id} title={item.name}></Article>)

    return(
      <div>
        <h1>Arkiver</h1>
        <p>
          Artikel: {article} <br />
          Dato: {date} <br />
          Filter: {filter}
        </p>
        <div class="row">
          {Artikler}
        </div>
    </div>
    );
  }
}
