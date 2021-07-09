import React from "react";
import WeatherCard from "../components/WeatherComponents/weatherCard";
import SwipeableTextMobileStepper from "../components/WeatherComponents/weatherCarosel";
import styled from "styled-components";
import MarsLandscape from "../assets/img/MarsLandscape.jpg";
import { style } from "@material-ui/system";

const WeatherStyle = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const WeatherBgImg = styled.div `
background-image: url(${MarsLandscape});
background-repeat: no-repeat;
background-size: cover;
width: 100vw;
  height: 100vh

`

const Weather = () => {
  return (
      <WeatherBgImg>
    <WeatherStyle>
      <SwipeableTextMobileStepper />
      <WeatherCard />
    </WeatherStyle>
    </WeatherBgImg>
  );
};

export default Weather;
