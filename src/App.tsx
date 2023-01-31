import React from "react";
import "../components/styles/index.scss";
import InputDemo from "../components/input/demo/index";

function App() {
  return (
    <div className="App">
      <div
        style={{
          margin: "20px auto",
          width: "700px",
          height: "200px",
        }}
      >
        <InputDemo></InputDemo>
      </div>
    </div>
  );
}

export default App;
