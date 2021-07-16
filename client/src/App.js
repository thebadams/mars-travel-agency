import React, {useEffect} from "react";

//Import Pages
import Booking from "./pages/Booking";
import Home from "./pages/Home";
import Login from "./pages/Login";
import News from "./pages/News";
import Profile from "./pages/Profile";
import Confirmation from "./pages/Confirmation"
import NoMatch from "./pages/NoMatch";

import SignUp from "./pages/SignUp";

import Weather from "./pages/Weather";

//Import Components
import Burger from "./components/BurgerComponents/Burger";

//Animations
import { AnimatePresence } from "framer-motion";

//Router
import { Switch, Route, useLocation } from "react-router-dom";
import LoggedInProtectedRoute from './components/RouteComponents/LoggedInProtectedRoute'
import LoggedOutProtectedRoute from "./components/RouteComponents/LoggedOutProtectedRoute";
//Context
import { GlobalProvider, useAppStateContext } from "./utils/GlobalContext";
function App() {
  const location = useLocation();
  const [state, dispatch] = useAppStateContext();

  return (
    <GlobalProvider>
    <div className="App">
      <Burger />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home />
          </Route>
          {/* <Route path="/login" exact>
            <Login />
          </Route> */}
          <LoggedOutProtectedRoute exact path='/login' component={Login}/>
          {/* <Route path="/signup" exact>
            <SignUp />
          </Route> */}
          <LoggedOutProtectedRoute exact path='/signup' component={SignUp} />
          <Route path="/booking" exact>
            <Booking />
          </Route>
          <Route path="/weather" exact>
            <Weather />
          </Route>
          <Route path="/news" exact>
            <News />
          </Route>
          <LoggedInProtectedRoute exact path='/profile' component={Profile}/>
          <Route path="/confirmation" exact>
            <Confirmation />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
    </GlobalProvider>
  );
}

export default App;