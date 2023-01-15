import React, { useState } from "react";
import Button from "../button";
import type { ButtonSize } from "../button";

const App = () => {
  const [size, setSize] = useState<ButtonSize>("sm"); // default is 'sm'

  const changeSize = () => {
    size === "lg" ? setSize("sm") : setSize("lg");
  };

  return (
    <>
      <Button label="Download" size={size}></Button>
    </>
  );
};

export default App;
