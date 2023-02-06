import React from "react";
import Button from "..";

const App = () => {
  return (
    <>
      <Button label="Download" size="sm" type="default" wave></Button>
      <span> </span>
      <Button label="Download" size="md" type="primary" wave></Button>
      <span> </span>
      <Button label="Download" size="lg" color="red" glossy wave></Button>
    </>
  );
};

export default App;
