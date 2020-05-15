import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import {API_URL, API_KEY, API_DATE_TAG} from "../constants.js"

// generate styles
const ContentContainer = styled.div`
    width: 90%;
    background-color: black;
    color: white;
    border-radius: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ContentImage = styled.img`
    max-width: 75%;
    margin-top: 50px;
    border-radius: 25px;
`;

const ContentP = styled.p`
    max-width: 75%;
    margin-bottom: 50px;
`;

const ContentCopyright = styled.h3`
    margin-left: 10px;
`;

const ContentDate = styled.h3`
    margin-left: 10px;
    margin-right: 10px;
`;

const ContentTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const ContentTitle = styled.h2`
    margin-right: 10px;
`;

export default function Content(props) {

    const [contentImageURL, setContentImageURL] = useState(null);
    const [contentTitle, setContentTitle] = useState("Loading...");
    const [contentDate, setContentDate] = useState("Loading...");
    const [contentCopyright, setContentCopyright] = useState("Loading...");
    const [contentExplanation, setContentExplanation] = useState("Loading...");

    useEffect(() => {

        // Build the api url string
        let apiString = `${API_URL}${API_KEY}`;

        if (props.useCustomDate) {
            apiString += `${API_DATE_TAG}${props.customDate}`;
        }
        // done building api string

        // use api string to get data
        axios.get(`${apiString}`)
        .then(result => {
          setContentImageURL(result.data.url);
          setContentTitle(result.data.title);
          setContentDate(result.data.date);
          setContentCopyright(result.data.copyright);
          setContentExplanation(result.data.explanation);
        })
        .catch (error => {
          console.log("Error fetching data from API.");
          setContentImageURL(null);
          setContentTitle("No Image Found!");
          setContentDate(props.customDate);
          setContentCopyright("N/A");
          setContentExplanation("No result was found at api.nasa.gov for date " + props.customDate + ". Please enter another date.");
        })
        .finally ( () => {
          console.log("API call has finished.");
        });

    })

    // return component elements
    return (
        <ContentContainer className="contentContainer">
            <ContentImage src={contentImageURL} alt="NASA Astronomy Pic Of The Day" className="contentImage"></ContentImage>
            <ContentTitleContainer className="contentTitleContainer">
                <ContentTitle className="contentTitle">{contentTitle}</ContentTitle>
                <ContentDate className="contentDate">Date: {contentDate}</ContentDate>
                <ContentCopyright className="contentCopyright">Copyright: {contentCopyright}</ContentCopyright>
            </ContentTitleContainer>
            <ContentP>{contentExplanation}</ContentP>
        </ContentContainer>
    )
}