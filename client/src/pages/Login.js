import React from "react";

//Page Components
import Background from "../components/loginComponents/Background.js";
import LoginBox from "../components/loginComponents/LoginBox.js";
//Animations

//Styling
import styled from "styled-components";


const LoginStyle= styled.div `
height: 100vh;
display: flex;
align-items: center;
/* position: fixed; */

`


const Login = () => {
  return (
    <div>
      <LoginStyle>
      <Background />
      <LoginBox />
      </LoginStyle>
    </div>
  );
};

export default Login;
