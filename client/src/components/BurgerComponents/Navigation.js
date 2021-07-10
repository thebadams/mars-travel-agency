import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { NavAnim } from "./BurgerAnimation";
//Icons
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCalendarAlt,
  faCloudSun,
  faSignInAlt,
  faUserPlus,
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

const logMeOut = (dispatch) => {
  //dispatch the object or log out get req to /auth/logout
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
      <MenuItem navItems={logOutButton} onClick={() => {logMeOut(dispatch)}}></MenuItem>
    )

  }
    return (
      <MenuItem navItems={logInButton}></MenuItem>
    )

 
}

export const Navigation = () => {
  const [state, dispatch] = useAppStateContext()

  return (
  <motion.ul variants={NavAnim}>
    {navItems.map((navitem) => (
      <MenuItem navItems={navitem} key={navitem.id}/>
    ))}

    {displayProfile(state)}
    {displayLoginOrOut(state, dispatch)}
  </motion.ul>
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
  links: "/login",
  text: "Logout",
  icons: faSignOutAlt,
  id: 4
}
