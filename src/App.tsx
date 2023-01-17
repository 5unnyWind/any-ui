import React from "react";
import "../components/styles/index.scss";
import ButtonDemo from "../components/button/demo/size";
import BadgeDemo from "../components/badge/demo/basic";
import SwitchDemo from "../components/switch/demo/demo";
import BreadcrumbDemo from "../components/breadcrumb/demo/base";

function App() {
  return (
    <div className="App">
      <ButtonDemo></ButtonDemo>
      <div />
      <BadgeDemo></BadgeDemo>
      <SwitchDemo></SwitchDemo>
      <BreadcrumbDemo></BreadcrumbDemo>
    </div>
  );
}

export default App;
