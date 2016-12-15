export default function reducer(state={
  user:[],
  fetching : false,
  fetched: false,
  error : null
}, action){

  switch (action.type) {
    case "Fetch_USER":{
     return {...state, fetching: true}
    }
    case "Fetch_USER_REJECTED":{
      return {...state, fetching: false, error: action.payload}
    }

    case "FETCH_USER_FULFILLED" :{
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload,
      }
    }

    case "SET_USER_NAME": {
      console.log(...state);
          return {
            ...state,
            user: {...state.user, name: action.payload},
          }
        }

    }

  return state
}
