import React from "react";
import styled from "styled-components";
//import "./Header.css";

// header will have
// div (outer container)
    // h1 (title)

const HeaderContainer = styled.div`
width: 100%;
background-color: #444444;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

const HeaderTitle = styled.h1`
color: white;
text-align: center;
`;

export default function Header() {

    return (
        <HeaderContainer className="headerContainer">
            <HeaderTitle className="headerTitle">Astronomy Pic Of The Day (NASA)</HeaderTitle>
        </HeaderContainer>
    )
}