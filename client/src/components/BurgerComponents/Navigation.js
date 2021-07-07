import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { NavAnim } from "./BurgerAnimation";




export const Navigation = () => (
  <motion.ul variants={NavAnim}>
    {itemIds.map((i) => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4, 5, 6];

