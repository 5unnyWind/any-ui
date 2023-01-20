import React from "react";
import Tree from "../tree";

const App = () => {
  const simple = [
    {
      label: "Satisfied customers (with avatar)",
      children: [
        {
          label: "Good food (with icon)",
          children: [
            { label: "Quality ingredients" },
            { label: "Good recipe" },
          ],
        },
        {
          label: "Good service (disabled node with icon)",
          children: [
            { label: "Prompt attention" },
            { label: "Professional waiter" },
          ],
        },
        {
          label: "Pleasant surroundings (with icon)",
          children: [
            { label: "Happy atmosphere (with image)" },
            { label: "Good table presentation" },
            { label: "Pleasing decor" },
          ],
        },
      ],
    },
  ];
  return (
    <>
      <div style={{ padding: "20px" }}>
        <Tree list={simple}></Tree>
      </div>
    </>
  );
};

export default App;
