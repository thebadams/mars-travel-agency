import * as React from "react";
import { motion } from "framer-motion";
import { ItemAnim } from "./BurgerAnimation";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { useLocation } from "react-router-dom";
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCalendarAlt,
  faCloudSun,
  faSignInAlt,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import {
  faNewspaper
} from "@fortawesome/free-regular-svg-icons"

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF", "#0033ff"];
const links = ["/", "/booking", "/weather", "/news", "/login", "/signup"]
const text = ["Home", "Booking", "Weather", "News", "Login", "SignUp"]
const icons = [ faHome, faCalendarAlt, faCloudSun, faNewspaper, faSignInAlt, faUserPlus]

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}`, color: `${colors[i]}` };

  return (
    <StyledItems>
    <motion.li
      variants={ItemAnim}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={`${links[i]}`}>
      <FontAwesomeIcon className="icon" icon={icons[i]} color={`${colors[i]}`} size="4x"/>
      </Link>
      <Link to={`${links[i]}`} className="text" style={style}>{`${text[i]}`}</Link>
    </motion.li>
    </StyledItems>
  );
};

const StyledItems = styled.div`

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