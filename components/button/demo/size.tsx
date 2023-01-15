import React, { useState } from "react";
import Button from "../button";
import type { ButtonSize } from "../button";

const App = () => {
  return (
    <>
      <Button label="Download" size="sm" type="default" wave></Button>
      <span> </span>
      <Button label="Download" size="md" type="primary" wave></Button>
      <span> </span>
      <Button label="Download" size="lg" type="danger" glossy></Button>
    </>
  );
};

export default App;
