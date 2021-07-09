import React from "react";
import styled from "styled-components";
import Background from "../components/loginComponents/Background";
import Img from '../assets/img/mars.bg.jpg';


const HomeStyle = styled.div`
background-image: url(${Img});
background-position: center;
width: 100vw;
height: 100vh;
opacity: 0.8;
`;

const Home = () => {
  return (
    <HomeStyle>
      <Background />
    </HomeStyle>
  )
};

export default Home;