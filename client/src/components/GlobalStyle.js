import { createGlobalStyle } from "styled-components";
import Img from "../assets/img/mars.bg.jpg"

const GlobalStyle = createGlobalStyle`
    
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto-Regular, HelveticaNeue, Arial, sans-serif;
}

body {
    background: #000000;
    /* background-image: url(${Img});
    background-position: center;
    width: 100vw;
    height: 100vh; */
    font-family: 'Inter, sans-serif';
    overflow-x: hidden;
}

html{
    @media (max-width: 1700px){
        font-size: 75%;
    }

}


`;

export default GlobalStyle;
