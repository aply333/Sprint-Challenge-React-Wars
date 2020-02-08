import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import "./App.css";

// Components

import Characters from "./components/Characters";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const initialSwapi = [];
  const [swapiData, swapiFetch] = useState(initialSwapi);

  const axiosInitiate = () => {
    axios
      .get("https://swapi.co/api/people/")
      .then(res => swapiFetch(res.data.results))
      .catch(err => console.log(err))
  };

  useEffect(axiosInitiate, [])
  console.log (swapiData)

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Characters swapiData={swapiData}/>
    </div>
  );
};

export default App;
