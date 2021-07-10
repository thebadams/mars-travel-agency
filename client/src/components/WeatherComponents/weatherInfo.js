import React from 'react';
import styled from "styled-components";

const InfoStyle = styled.div `
margin-bottom: 50%;
font-size: x-large;
color: whitesmoke;
`

export default function WeatherInfo () {
    return (
        <div>
            <InfoStyle>
            <h1>hello</h1>
            <h2>this is info</h2>
            <h3>that we will use</h3>
            </InfoStyle>
        </div>
    );
}