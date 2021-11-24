import React from 'react';
import styled from 'styled-components';
import Background from '../components/loginComponents/Background';
import Img from '../assets/img/mars.bg.jpg';

const FixedBGStyled = styled.div`
    .figure-fixed {
    position: relative;
    width: 100vw;
    height: 100vh;
    margin: 0!important;
}
    .fixed-wrap {
    clip: rect(0, auto, auto, 0);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
    .fixed {
    background-image: url(${Img});
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    will-change: transform;
}
`;


const FixedBG = () => {
    return (
        <FixedBGStyled>
            <div class="my-4">
                <figure className="figure-fixed">
                    <div className="fixed-wrap">
                        <div className="fixed"><Background /></div>
                    </div>
                </figure>
            </div>
        </FixedBGStyled>
    )
}

export default FixedBG;