export default function reducer(state={
  tweets: [],
  fetching : false,
  fetched: false,
  error : null
}, action){
  switch (action.type) {
    case "Fetch_TWEETS":{
      return Object.assign({}, state, {
        fetching:true
      })
    }
    case "Fetch_TWEETS_REJECTED":{
      return Object.assign({}, state, {
        fetching:false, error: action.payload
      })
    }
    case "FETCH_TWEETS_FULFILLED" :{
      return Object.assign({}, state, {
        fetching:false,
        fetched:true,
        tweets: action.payload
      })
    }
  }
  return state
}
