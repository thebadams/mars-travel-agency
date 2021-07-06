import React from "react";

//Import API
import API from "./utils/spotifysearch";

//Global Style
import GlobalStyle from "./components/GlobalStyle";

//Import Pages
import Booking from "./pages/Booking";
import Home from "./pages/Home";
import Login from "./pages/Login";
import News from "./pages/News";

import SignUp from "./pages/SignUp";

import Weather from "./pages/Weather";

//Import Components
import Burger from "./components/BurgerComponents/Burger";

//Animations
import { AnimatePresence } from "framer-motion";

//Router
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Burger />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
          <Route path="/booking" exact>
            <Booking />
          </Route>
          <Route path="/weather" exact>
            <Weather />
          </Route>
          <Route path="/news" exact>
            <News />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

{
  /* <header className="App-header">
  <button onClick={API}>Click ME</button>
</header>; */
}

export default App;
