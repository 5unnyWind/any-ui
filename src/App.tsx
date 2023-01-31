import React from "react";
import "../components/styles/index.scss";
import ButtonDemo from "../components/button/demo/size";
import BadgeDemo from "../components/badge/demo/basic";
import SwitchDemo from "../components/switch/demo/demo";
import CardDemo from "../components/card/demo/basic";
import FormDemo from "../components/form/demo/index";
function App() {
  return (
    <div className="App">
      <ButtonDemo></ButtonDemo>
      <div />
      <BadgeDemo></BadgeDemo>
      <div />
      <SwitchDemo></SwitchDemo>
      <div />
      <br />
      <CardDemo></CardDemo>
      <div />
      <FormDemo></FormDemo>
    </div>
  );
}

export default App;
