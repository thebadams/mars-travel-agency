import React from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import ImgFooter from "../assets/img/mars-footer.jpeg";

const FooterStyle = styled.div`
  text-align: center;
  background: black;
  opacity: 0.7;
  font-size: large;
  padding-top: 2rem;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  .info {
    color: white;
    width: 90%;
    padding-bottom: 2rem;
    padding-left: 10%;
  }

  .carousel-inner img {
    width: 100%;
    height: 100%;
  }

  .carousel-caption {
    right: 15%;
    left: 15%;
    z-index: 1;
    color: white;
    padding-bottom: 2%;
    text-align: center;
    transform: translateY(-50%);
  }

  .carousel-caption h1 {
    font-size: 400%;
    text-transform: uppercase;
    text-shadow: 1px 1px 15px #000;
  }

  .carousel-caption h3 {
    font-size: 200%;
    font-weight: 400;
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
      padding-bottom: 0.2rem;
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
  }
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
  } ;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <Container>
        <div className="info">
          <h2>More Info About Mars Travel Agency</h2>
          <p>
            Like many of you we were inspired by Richard Branson and Jeff Bezos
            when they ventured into outerspace. Soon after, it was announce
            around the world that Space X launch zones had been approved for
            civillian space travel. For the first time, the bridge between a
            common man and fufilling their space dreams did not seem so
            daunting. So the Mars Travel Agency, or the MTA came together to
            help the world have a single portal to plan their next trip to Mars.
          </p>
        </div>
        <div className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={ImgFooter} alt="img"></img>
              <div className="carousel-caption">
                <h1 className="display-2">Mars Travel Agency</h1>
                <h3>Book your flight to Mars <a href="/booking">here</a>!</h3>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </FooterStyle>
  );
};

export default Footer;
