import React from "react";
import Tree from "../tree";

const App = () => {
  const simple = [
    {
      label: "Satisfied customers (with avatar)",
      children: [
        {
          label: "1231231",
          children: [{ label: "12312" }, { label: "421412e" }],
        },
        {
          label: "214121t1412 i412)",
          children: [
            { label: "Pr142141tion" },
            { label: "Pro21412412al41iter" },
          ],
        },
        {
          label: "Ple4nt su141h icon)",
          children: [
            { label: "Ha141" },
            { label: "Good ta124ation" },
            { label: "Plea124or" },
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
