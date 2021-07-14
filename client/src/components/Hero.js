import React from "react";
import styled from "styled-components";
import Img from "../assets/img/hero.jpg";

const HeroStyled = styled.div`
    .carousel-inner img {
        width: 100%;
        height: 100%;
    }

    .carousel-caption {
        position: absolute;
        right: 15%;
        bottom: 20px;
        top: 50%;
        left: 15%;
        z-index: 1;
        color: white;
        padding-top: 20px;
        padding-bottom: 20px;
        text-align: center;
        transform: translateY(-50%);
    }

    .carousel-caption h1 {
        font-size: 500%;
        text-transform: uppercase;
        text-shadow: 1px 1px 15px #000;
    }

    .carousel-caption h3 {
        font-size: 200%;
        font-weight: 500;
        text-shadow: 1px 1px 10px #000;
        padding-bottom: 1rem;
    }

            @media (max-width: 768px) {
        .carousel-caption {
            top: 45%;
        }
        
        .carousel-caption h1 {
            font-size: 350%;
        }
        
        .carousel-caption h3 {
            font-size: 140%;
            font-weight: 400;
            padding-bottom: .2rem;
        }
        .carousel-caption .btn {
            font-size: 95%;
            padding: 8px 14px;
        }
        .display-4 {
            font-size: 200%;
        }
        .social a {
            font-size: 2.5em;
            padding: 1.2rem;
        }
    };
        @media (max-width: 576px) {
        .carousel-caption {
            top: 40%;
        }
        
        .carousel-caption h1 {
            font-size: 250%;
        }
        
        .carousel-caption h3 {
            font-size: 110%;
        }
        .carousel-caption .btn {
            font-size: 90%;
            padding: 4px 8px;
        }
        .display-4 {
            font-size: 160%;
        }
        .social a {
            font-size: 2.5rem;
            padding: 1.2rem;
        }
    };
`;


const Hero = () => {
    return (
        <HeroStyled>
            <div className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Img} alt="img"></img>
                            <div className="carousel-caption">
                                <h1 className="display-2">Mars Travel Agency</h1>
                                <h3>Book your flight to Mars here!</h3>
                            </div>
                    </div>
                </div>
            </div>
        </HeroStyled>
    );
};

export default Hero;