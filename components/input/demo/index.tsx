import React from "react";
import Input from "..";

const App = () => {
  return (
    <>
      <Input label="Label" placeholder="Placeholder"></Input>
      <br />
      <Input label="Label"></Input>
      <br />
      <Input label="Label" outlined></Input>
    </>
  );
};

export default App;
