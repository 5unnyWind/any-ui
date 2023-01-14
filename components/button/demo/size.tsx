import React, { useState } from "react";
import Button from "../button";
import type { ButtonSize } from "../button";

const App: React.FC = () => {
  const [size, setSize] = useState<ButtonSize>("sm"); // default is 'sm'

  const changeSize = () => {
    size === "lg" ? setSize("sm") : setSize("lg");
  };

  return (
    <>
      <Button type="primary" size={size} onClick={changeSize}>
        Download
      </Button>
    </>
  );
};

export default App;
