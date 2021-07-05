import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: #1b1b1b;
    font-family: 'Inter, sans-serif';
    overflow-x: hidden;
}

html{
    @media (max-width: 1700px){
        font-size: 75%;
    }

}

button{
    font-weight: bold;
    font-size: 1.6rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter, sans-serif';
    &:hover{
        background-color: #23d997;
        color: white;
    }
}

`;

export default GlobalStyle;
