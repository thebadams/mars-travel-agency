import * as React from "react";
import { motion } from "framer-motion";
import { ItemAnim } from "./BurgerAnimation";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { useLocation } from "react-router-dom";
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF", "#0d00ff", "#5a0cd7"];
// const links = ["/", "/booking", "/weather", "/news", "/login", "/signup", "/profile"]
// const text = ["Home", "Booking", "Weather", "News", "Login", "SignUp", "Profile"]
// const icons = [ faHome, faCalendarAlt, faCloudSun, faNewspaper, faSignInAlt, faUserPlus, faUserAstronaut]



export const MenuItem = (props) => {
  const { colors, links, text, icons, logOut } = props.navItems
  const style = { border: `2px solid ${colors}`, color: `${colors}` };

  // const loggedIn = true; 

  

  return (
    <StyledItems>
    <motion.li
      variants={ItemAnim}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={`${links}`}>
      <FontAwesomeIcon className="icon" icon={icons} color={`${colors}`} size="4x" onClick={logOut}/>
      </Link>
      <Link to={`${links}`} className="text" style={style} onClick={logOut}>{`${text}`}</Link>
    </motion.li>
    </StyledItems>
  );
};

export const StyledItems = styled.div`

li {
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
}



.icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex: 40px 0;
  margin-right: 20px;
}

.text {
  border-radius: 5px;
  width: 200px;
  height: 20px;
  flex: 1;
  font-size: 15px;
  text-align: center;
  text-decoration: none;
}

`;