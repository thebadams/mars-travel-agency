import React from 'react';
import styled from "styled-components";

const CursorStyled = styled.div`
    * {
        background: black;
        cursor: none;
    }
    #image {
        position: absolute;
        top: 20%;
        left: 20%;
        transform: translate(-50%,-50%);
        
        pointer-events: none;
        box-sizing: border-box;
        object-fit: cover;
        height: 50px;
        /*   transition: 0.2s; */
    }
`

const Cursor = () => {
    return(
        <CursorStyled>
            <img id="image" alt="rocket" src="https://images.vexels.com/media/users/3/145819/isolated/preview/486c34cf5b3b4badd52bc427dbeb44a1-rocket-cartoon-by-vexels.png"/>
        </CursorStyled>
    )
}

export default Cursor;