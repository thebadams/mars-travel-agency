import React from "react";
import { Button } from '@material-ui/core';
import styled from "styled-components";
import WeatherCard from "../components/WeatherComponents/weatherCard"


const WeatherStyle = styled.div`

width: 100vw;
height: 100vh;
display: flex;
    justify-content: center;

.weatherBtn{
    background: red;
}
.weatherCard{
    background: red;
}
`;

const Weather = () => {
    return(
        <WeatherStyle>
            <Button color="primary" className= "weatherBtn">Hello World</Button>
            <WeatherCard className= "weatherCard" />
        </WeatherStyle>
    )
};

export default Weather;
