import axios from "axios";

export function fetchUser() {
return function(dispatch){
  axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
      dispatch({type:"FETCH_USER_FULFILLED", payload:res.data})
    })
    .catch((err)=>{
      dispatch({type:"FETCH_USER_REJECTED", payload:err})
    })
}
}

export function setUserName(name) {
  return {
    type: 'SET_USER_NAME',
    payload: name,
  }
}
