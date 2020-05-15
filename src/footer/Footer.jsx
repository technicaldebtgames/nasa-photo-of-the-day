import React from "react";
import styled from "styled-components";

// create styles
const FooterContainer = styled.div`
    width: 100%;
    padding-bottom: 100px;
    margin-top: 50px;
    background-color: #444444;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const FooterText = styled.p`
    font-family: "Space Mono", sans-serif;
    text-align: center;
    color: white;
`;

const TxtCustomDate = styled.input`
    margin: 10px 10px 10px 10px;
`;

const SubGeneratePage = styled.input`
    margin: 10px 10px 10px 10px;
`;
    
export default function Footer(props) {

    // set date string to hold text value while text input is being changed
    let dateString = "";

    // function for text input onChange event
    function changeDateString(event) {
        dateString = event.target.value;
    }

    // set state for access in content component
    function onGeneratePage(event) {
        props.setCustomDate(dateString);
        props.setUseCustomDate(true);
    }

    // return component elements
    return (
        <FooterContainer className="footerContainer">
            <FooterText className="footerText">Want a custom date? Enter it in YYYY-MM-DD format:</FooterText>
            <TxtCustomDate type="text" id="txtCustomDate" onChange={changeDateString}></TxtCustomDate>
            <SubGeneratePage type="submit" value="Get the photo!" id="subGeneratePage" onClick={onGeneratePage}></SubGeneratePage>
        </FooterContainer>
    )
}