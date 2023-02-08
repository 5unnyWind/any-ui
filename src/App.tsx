import React from "react";
import "../components/styles/index.scss";
import InputDemo from "../components/input/demo/index";
import TreeDemo from "../components/tree/demo/index";
import ButtonDemo from "../components/button/demo/index";

function App() {
  return (
    <div
      className="App"
      style={{
        width: "400px",
        margin: "20px auto",
      }}
    >
      <InputDemo></InputDemo>
      <br />
      <TreeDemo></TreeDemo>
      <br />
      <ButtonDemo></ButtonDemo>
    </div>
  );
}

export default App;
