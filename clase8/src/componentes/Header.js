import React from "react";
import styled from "styled-components";
import imagen from '../imagenes/foto.jpg';
const Headers =()=>{
    return(
        <Container>
            <a>
                <img src={imagen} alt=""/>
            </a>
        </Container>
    )
}
export default Headers;

const Container = styled.section`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top:0;
    left:0;
    right:0;
`;