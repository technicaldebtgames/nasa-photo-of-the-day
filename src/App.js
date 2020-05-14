import React, {useState} from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./header/Header";
import Content from "./content/Content";
import Footer from "./footer/Footer";

// still working on styled components

function App() {

  const [useCustomDate, setUseCustomDate] = useState(false);
  const [customDate, setCustomDate] = useState(null);

  return (
    <div className="appContainer">
      <Header/>
      <Content useCustomDate={useCustomDate} customDate={customDate}/>
      <Footer setUseCustomDate={setUseCustomDate} setCustomDate={setCustomDate}/>
    </div>
  )
  
}

export default App;
