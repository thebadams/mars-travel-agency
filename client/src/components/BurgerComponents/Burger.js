import React from "react";
import { useRef } from "react";
import styled from "styled-components";



//Animation
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { sidebar, NavContainerAnim } from "./BurgerAnimation";

const Burger = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <StyledNav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      variants= {NavContainerAnim}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  z-index: auto;


.background {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background: rgb(169,169,242);
  background: linear-gradient(180deg, rgba(169,169,242,1) 0%, rgba(148,233,211,1) 100%);
}
`


export default Burger;
