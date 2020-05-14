import React, {useState, useEffect} from "react";
import axios from "axios";
import {API_URL, API_KEY, API_DATE_TAG} from "../constants.js"
import "./Content.css";

// header will have
// div (outer container)
    // img resp.data.url
    // div (title container)
        // h2 resp.data.title
        // h3 resp.data.date
        // h3 resp.data.copyright
    // p resp.data.explanation

export default function Content(props) {

    const [contentImageURL, setContentImageURL] = useState(null);
    const [contentTitle, setContentTitle] = useState("Loading...");
    const [contentDate, setContentDate] = useState("Loading...");
    const [contentCopyright, setContentCopyright] = useState("Loading...");
    const [contentExplanation, setContentExplanation] = useState("Loading...");

    // add ability to toggle between HD and regular resolution?

    useEffect(() => {

        let apiString = `${API_URL}${API_KEY}`;

        if (props.useCustomDate) {
            apiString += `${API_DATE_TAG}${props.customDate}`;
        }

        axios.get(`${apiString}`)
        .then(result => {
            //console.log(result);
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

    return (
        <div className="contentContainer">
            <img src={contentImageURL} alt="NASA Astronomy Pic Of The Day" className="contentImage"></img>
            <div className="contentTitleContainer">
                <h2 className="contentTitle">{contentTitle}</h2>
                <h3 className="contentDate">Date: {contentDate}</h3>
                <h3 className="contentCopyright">Copyright: {contentCopyright}</h3>
            </div>
            <p>{contentExplanation}</p>
        </div>
    )
}