import React from 'react';
import styled from "styled-components";
import { motion } from 'framer-motion';
import { lineAnim } from '../animation';
import { Container } from '@material-ui/core';

const InfoStyle = styled.div `
margin-top: 20%;
font-size: large;
color: whitesmoke;

.weather-info {
    display: flex;
    flex-direction: row;
}

.header {
    font-size: xx-large;
    margin-left: 5%;
}

.left,
.right {
    border-radius: 12px;
    line-height: 100px;
    margin-top: 2rem;
    background: black;
    width: 40%;
    opacity: 0.65;
    height: 200px;
    text-align: center;
    vertical-align: middle;
}

.line {
    height: 0.3rem;
    width: 50%;
    margin-left: 25%;
    background: white;
}
`

export default function WeatherInfo () {
    return (
        <Container>
            <InfoStyle>
            <Container className="header">
                <h1>Latest Weather<br></br>
                    <span>at Gale Crater</span>
                </h1>
            </Container>
            <Container className="weather-info">
                <Container maxWidth="sm" className="left">
                    <h4>Sol 3163</h4>
                    <motion.div variants={lineAnim} className="line"></motion.div>
                    <h4>June 30, 2021</h4>
                </Container>
                <Container maxWidth="sm" className="right">
                    <h4>High: -13 F | C</h4>
                    <motion.div variants={lineAnim} className="line"></motion.div>
                    <h4>Low: -108 F | C</h4>
                </Container>
            </Container>
            </InfoStyle>
        </Container>
    );
}