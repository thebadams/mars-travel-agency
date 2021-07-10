import React from "react";
import WeatherCard from "../components/WeatherComponents/weatherCard";
import SwipeableTextMobileStepper from "../components/WeatherComponents/weatherCarosel";
import styled from "styled-components";
import MarsLandscape from "../assets/img/MarsLandscape.jpg";
import WeatherInfo from "../components/WeatherComponents/weatherInfo";


const WeatherStyle = styled.div `
/* display: flex;
flex-direction: column;
justify-content: center;
align-items: center; */
font-family: Roboto-Regular, HelveticaNeue, Arial, sans-serif;
height: 100vh;
`
const WeatherTop = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-end;
padding-left: 20%;
`
const WeatherBottom = styled.div `
display: flex;
flex-direction: row;
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
