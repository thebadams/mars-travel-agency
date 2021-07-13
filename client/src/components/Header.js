import React from 'react';
import styled from "styled-components";
import Container from '@material-ui/core/Container';

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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue, lacus ut cursus commodo, libero ex dapibus magna, quis semper ligula nibh id sapien. Aenean id sollicitudin augue. Vestibulum id tincidunt ligula, nec vehicula enim.
                        Integer sollicitudin et felis quis condimentum. Morbi a nulla vitae urna tempus efficitur id id lectus. Nullam dictum molestie eros vel tristique.
                        Nam lectus augue, fringilla sit amet nunc at, dapibus imperdiet nisi.
                    </p>
                </div>
            </Container>
        </HeaderStyle>
    );
};

export default Header;
