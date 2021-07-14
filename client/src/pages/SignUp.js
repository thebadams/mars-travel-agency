import React from "react";

//Page Components
import Background from "../components/loginComponents/Background.js";
import SignUpBox from "../components/loginComponents/SignUpBox.js";
//Animations

//Styling
import styled from "styled-components";


const SignUpStyle= styled.div `
height: 100vh;
display: flex;
align-items: center;

`

const SignUp = () => {
  return (
    <div>
      <SignUpStyle>
      <Background />
      <SignUpBox />
      </SignUpStyle>
    </div>
  );
};

export default SignUp;
