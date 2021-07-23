import React from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";

const HeaderStyle = styled.div`
  text-align: center;
  background: black;
  color: white;
  opacity: 0.9;
  font-size: large;
  padding: 5rem;
  border-radius: 0;
  width: 100%;

  .hero {
    width: 90%;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <Container className="hero">
        <div className="about">
          <h2>About Mars Travel Agency</h2>
          <p>
            Whether if be your first time, or your next venture into space. We
            are here to make planning your trip to Mars a simple one stop shop.
            Combining the latest informations from Space X launch zones, or the
            latest weather information from NASA, planning your next space
            vacation has never been more simple!!
          </p>
        </div>
      </Container>
    </HeaderStyle>
  );
};

export default Header;
