import React, { createContext, useContext, useEffect, useReducer} from 'react';
import reducer from './globalUserReducer';
import checkAuthentication from './checkAuthentication';
const AppStateContext = createContext({
  loggedIn: false,
  user: {},
  // successMessage: "",
  // errorMessage: "",
  message: "",
  error: false,
  success: false,
  messageContainer: false,
  isLoading: true,
  showTickets: false,
  searchURL: "",
  flights: [],
  showSearchBox: true
  
})

const GlobalProvider = ({ value = [], ...props}) => {
  const [state, dispatch] = useReducer(reducer, {
    loggedIn: false,
    user: {
    },
    message: "",
    error: false,
    success: false,
    messageContainer: false,
    isLoading: true,
    showTickets: false,
    searchURL: "/api/booking",
    flights: [],
    showSearchBox: true

    //add a reservations-array 
  })

  const checkAuth = (state, dispatch) => checkAuthentication()
  .then((data)=> {
    console.log("STATE", state)
    console.log("DATA", data)
    console.log('Dispatching Login')
    dispatch({type:'SET_SUCCESS', value: true})
    dispatch({type: 'SET_MESSAGE', value: 'Dispatched Logged In Successfully'})
    dispatch({type: 'TOGGLE_MESSAGE_CONTAINER', value: true})
    // dispatch({type: 'SET_SUCCESS', value: false})
    return dispatch({type:'LOG_IN', value: data.user})
  })

  .catch(()=>{
    console.log('Dispatching LogOut')
    dispatch({type: 'SET_SUCCESS', value: false})
    dispatch({type: 'SET_MESSAGE', value: 'User Is Not Currently Logged In'})
    dispatch({type: 'TOGGLE_MESSAGE_CONTAINER', value: true})
    return dispatch({type:'LOG_OUT', value: {}})
  })  
  .then(()=>{
    console.log('Dispatching SET Loading False')
    return dispatch({type: 'SET_IS_LOADING', value: false})
  }).then(()=> console.log("STATE 2", state))

  useEffect(()=> {
    checkAuth(state, dispatch)
  },[])
  return < AppStateContext.Provider value={[state, dispatch]} {...props} />

}

const useAppStateContext = () => {
  return useContext(AppStateContext);
}
export { GlobalProvider, useAppStateContext}
