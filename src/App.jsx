import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Timeline from "./components/Timeline";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Counter startDate="2019-09-30" />
      <Timeline />
    </div>
  );
}

export default App;
