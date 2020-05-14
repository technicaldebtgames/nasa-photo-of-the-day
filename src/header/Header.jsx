import React from "react";
import styled from "styled-components";
import "./Header.css";

// header will have
// div (outer container)
    // h1 (title)

export default function Header() {

    return (
        <div className="headerContainer">
            <h1 className="headerTitle">Astronomy Pic Of The Day (NASA)</h1>
        </div>
    )
}