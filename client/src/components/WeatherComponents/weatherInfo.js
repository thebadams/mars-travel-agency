import React from 'react';
import styled from "styled-components";
import { Container } from '@material-ui/core';

const InfoStyle = styled.div `
margin-bottom: 20%;
font-size: large;
color: whitesmoke;

.weather-info {
    display: flex;
    flex-direction: row;
}

.header {
    font-size: xx-large;
    margin-left: 10%;
}

.left,
.right {
    border-radius: 12px;
    line-height: 50px;
    margin-top: 2rem;
    background: black;
    width: 30%;
    opacity: 0.65;
    height: 120px;
    text-align: center;
    vertical-align: middle;
}
`

export default function WeatherInfo () {
    return (
        <Container>
            <InfoStyle>
            <Container className="header">
                <h1>Latest Weather</h1>
                <h2>at Gale Crater</h2>
            </Container>
            <Container className="weather-info">
                <Container maxWidth="sm" className="left">
                    <h4>Sol 3163</h4>
                    <h4>June 30, 2021</h4>
                </Container>
                <Container maxWidth="sm" className="right">
                    <h4>High: -13 F | C</h4>
                    <h4>Low: -108 F | C</h4>
                </Container>
            </Container>
            </InfoStyle>
        </Container>
    );
}