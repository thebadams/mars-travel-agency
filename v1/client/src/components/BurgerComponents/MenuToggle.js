import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => (
  <StyledButton onClick={toggle}>
    <StyledBurgerSvg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </StyledBurgerSvg>
  </StyledButton>
);

const StyledButton = styled.button`
  
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;
  width: 61px;
  height: 61px;
  border-radius: 50%;
  background: transparent;
  transition: all 0.5s ease;
  z-index: auto;


:hover {
  background-color: #23d997;
  color: white;
}
`;

const StyledBurgerSvg = styled.svg`

  margin-top: 5px;

`;