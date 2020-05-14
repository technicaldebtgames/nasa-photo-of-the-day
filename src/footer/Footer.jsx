import React from "react";
import "./Footer.css";

// header will have
// div (outer container)
    // future functionality will use forward and back
    // buttons to move between dates

export default function Footer() {

    const footerText = "footerText";

    return (
        <div className="footerContainer">
            <p className="footerText">{footerText}</p>
        </div>
    )
}