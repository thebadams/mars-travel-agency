import React from 'react';

const AppStateContext = React.createContext({
  loggedIn: false,
  user: {},
  successMessage: "",
  errorMessage: "",
  
})

export default AppStateContext;
