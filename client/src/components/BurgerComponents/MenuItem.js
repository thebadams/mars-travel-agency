import * as React from "react";
import { motion } from "framer-motion";
import { ItemAnim } from "./BurgerAnimation";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];


export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={ItemAnim}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon" style={style} />
      <div className="text" style={style} />
    </motion.li>
  );
};
