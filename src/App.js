import React from "react";

import "./App.scss";
import Header from "./Components/Header/Header";
import Question from "./Components/Question/Question";
import Answers from "./Components/Answers/Answers";
import Description from "./Components/Description/Description";

function App() {
  return (
    <div className="App">
      <Header />
      <Question />
      <Answers />
      <Description />
      
    </div>
  );
}

export default App;
