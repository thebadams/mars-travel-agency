import React, {useEffect} from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { NavAnim } from "./BurgerAnimation";
import axios from 'axios';
import styled from "styled-components";
//Icons
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCalendarAlt,
  faCloudSun,
  faSignInAlt,
  faSignOutAlt,
  faUserAstronaut
} from "@fortawesome/free-solid-svg-icons";
import {
  faNewspaper
} from "@fortawesome/free-regular-svg-icons"

import { useAppStateContext } from "../../utils/GlobalContext"


// export const Navigation = () => (
//   <motion.ul variants={NavAnim}>
//     {itemIds.map((i) => (
//       <MenuItem i={i} key={i} />
//     ))}
//   </motion.ul>
// );

const logMeOut = async (dispatch) => {
  //dispatch the object or log out get req to /auth/logout
  try {
    const response = axios.get('/auth/logout')
    if(response.data === {
      message: "You have been successfully logged out",
      user: {}
    }) {
      dispatch({type: 'LOG_OUT',
    value: response.data.user})
      dispatch({ type: 'SET_SUCCESS_MESSAGE',
    value: response.data.message })
    }
  } catch (error) {
    dispatch({type:'SET_ERROR_MESSAGE',
    value: "There was an error logging out"})
  }
  
  //DISPATCH 
}


const displayProfile = (state) => {

  if (state.loggedIn)
 {
   return (
     <MenuItem navItems={portfolioButton}></MenuItem>
   )
 }
}

const displayLoginOrOut = (state, dispatch) => {


  if (state.loggedIn) {
    return (
      <MenuItem navItems={logOutButton} onClick={(e) => {
        e.preventDefault();
        logMeOut(dispatch)}}></MenuItem>
    )

  }
    return (
      <MenuItem navItems={logInButton}></MenuItem>
    )

 
}

export const Navigation = () => {
  const [state, dispatch] = useAppStateContext()
  return (
  <StyledUL variants={NavAnim}>
    {navItems.map((navitem) => (
      <MenuItem navItems={navitem} key={navitem.id}/>
    ))}

    {displayProfile(state)}
    {displayLoginOrOut(state, dispatch)}
  </StyledUL>
  )
};



const navItems = [
  {
    colors: "#FF008C",
    links: "/",
    text: "Home",
    icons: faHome,
    id: 0
  },
  {
    colors: "#D309E1",
    links: "/booking",
    text: "Booking",
    icons: faCalendarAlt,
    id: 1
  },
  {
    colors: "#9C1AFF",
    links: "/weather",
    text: "Weather",
    icons: faCloudSun,
    id: 2
  },
  {
    colors: "#7700FF",
    links: "/news",
    text: "News",
    icons: faNewspaper,
    id: 3
  },

  // {
  //   colors: "#0d00ff",
  //   links: "/signup",
  //   text: "SignUp",
  //   icons: faUserPlus,
  //   id: 6
  // },
 
]


const portfolioButton =  {
  colors: "#5a0cd7",
  links: "/profile",
  text: "Profile",
  icons: faUserAstronaut,
  id: 7
}

const logInButton =   {
  colors: "#4400FF",
  links: "/login",
  text: "Login",
  icons: faSignInAlt,
  id: 4
}


const logOutButton =   {
  colors: "#4400FF",
  // links: "/login",
  text: "Logout",
  icons: faSignOutAlt,
  id: 4
}

const StyledUL = styled(motion.ul)`
  
  padding: 25px;
  position: absolute;
  top: 100px;
  width: 230px;


`