import React, {useState} from "react";
import "./App.css";
import Header from "./header/Header";
import Content from "./content/Content";
import Footer from "./footer/Footer";

function App() {

  // API test
  /*let dataFromAPI = null;
  axios.get(`${API_URL}${API_KEY}`)
  .then(result => {
    dataFromAPI = result;
    console.log("dataFromAPI = ");
    console.log(dataFromAPI);
  })
  .catch (error => {
    console.log("Error fetching data from API. Rate limit?");
  })
  .finally ( () => {
    console.log("API call has finished.");
  });*/
  // End API test, working

  const [useCustomDate, setUseCustomDate] = useState(false);

  const [customDate, setCustomDate] = useState(null);

  return (
    <div className="appContainer">
      <Header/>
      <Content useCustomDate={useCustomDate} customDate={customDate}/>
      <Footer setUseCustomDate={setUseCustomDate} setCustomDate={setCustomDate}/>
    </div>
  )
  /*(
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );*/
}

export default App;
