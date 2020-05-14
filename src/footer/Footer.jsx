import React from "react";
import styled from "styled-components";
import "./Footer.css";

// header will have
// div (outer container)
    // p Use custom date:
    // checkbox selected means setUseCustomDate=true
    // p "YYYY-MM-DD format:"
    // textfield to hold date value
    
export default function Footer(props) {

    let dateString = "";

    function changeDateString(event) {
        dateString = event.target.value;
    }

    function onGeneratePage(event) {
        props.setCustomDate(dateString);
        props.setUseCustomDate(true);
    }

    return (
        <div className="footerContainer">
            <p className="footerText">Want a custom date? Enter it in YYYY-MM-DD format:</p>
            <input type="text" id="txtCustomDate" onChange={changeDateString}></input>
            <input type="submit" value="Get the photo!" id="subGeneratePage" onClick={onGeneratePage}></input>
        </div>
    )
}