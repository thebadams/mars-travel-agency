import React, { createContext, useContext, useEffect, useReducer} from 'react';
import reducer from './globalUserReducer';
import checkAuthentication from './checkAuthentication';
const AppStateContext = createContext({
  loggedIn: false,
  user: {},
  successMessage: "",
  errorMessage: "",
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
    successMessage: "",
    errorMessage: "",
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
    return dispatch({type:'LOG_IN', value: data.user})
  })

  .catch(()=>{
    console.log('Dispatching LogOut')
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
