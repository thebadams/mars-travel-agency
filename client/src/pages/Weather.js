import React from "react";
import { Button } from '@material-ui/core';
import styled from "styled-components";
import WeatherCard from "../components/WeatherComponents/weatherCard"


const WeatherStyle = styled.div`

`;

const Weather = () => {
    return(
        <WeatherStyle>
            <WeatherCard className= "WeatherCard" />
        </WeatherStyle>
    )
};

export default Weather;
