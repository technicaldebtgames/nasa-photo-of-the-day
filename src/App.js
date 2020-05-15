import React, {useState} from "react";
import styled from "styled-components";
import Header from "./header/Header";
import Content from "./content/Content";
import Footer from "./footer/Footer";

// create styles
const AppContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-items: center;
`;

function App() {

  // create some state to pass between content and footer sections
  const [useCustomDate, setUseCustomDate] = useState(false);
  const [customDate, setCustomDate] = useState(null);

  // return component elements
  return (
    <AppContainer className="appContainer">
      <Header/>
      <Content useCustomDate={useCustomDate} customDate={customDate}/>
      <Footer setUseCustomDate={setUseCustomDate} setCustomDate={setCustomDate}/>
    </AppContainer>
  )
  
}

export default App;
