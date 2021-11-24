import React from "react";
import WeatherCard from "../components/WeatherComponents/weatherCard";
import SwipeableTextMobileStepper from "../components/WeatherComponents/weatherCarosel";
import styled from "styled-components";
import MarsLandscape from "../assets/img/MarsLandscape.jpg";
import WeatherInfo from "../components/WeatherComponents/weatherInfo";


const WeatherStyle = styled.div `
font-family: Roboto-Regular, HelveticaNeue, Arial, sans-serif;

`
const WeatherTop = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-end;
`
const WeatherBottom = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`

const WeatherBgImg = styled.div `
background-image: url(${MarsLandscape});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-attachment: fixed;
max-height: 100%;
height: 100vh;
`

const Weather = () => {
  return (
    <WeatherBgImg>
    <WeatherStyle>

    <WeatherTop>
    <WeatherInfo/>
      <SwipeableTextMobileStepper />
      </WeatherTop>

      <WeatherBottom>
      <WeatherCard />
      </WeatherBottom>

    </WeatherStyle>
    </WeatherBgImg>
  );
};

export default Weather;
