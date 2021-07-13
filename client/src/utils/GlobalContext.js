import React, { createContext, useContext, useReducer} from 'react';
import reducer from './globalUserReducer';
const AppStateContext = createContext({
  loggedIn: false,
  user: {},
  successMessage: "",
  errorMessage: "",
  messageContainer: false
  
})

const GlobalProvider = ({ value = [], ...props}) => {
  const [state, dispatch] = useReducer(reducer, {
    loggedIn: false,
    user: {
    },
    successMessage: "",
    errorMessage: "",
    messageContainer: false
  })
  return < AppStateContext.Provider value={[state, dispatch]} {...props} />

}

const useAppStateContext = () => {
  return useContext(AppStateContext);
}
export { GlobalProvider, useAppStateContext}
