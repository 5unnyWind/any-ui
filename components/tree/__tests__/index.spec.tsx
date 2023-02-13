import "@testing-library/jest-dom";
import React from "react";
import Tree from "../tree";
import { render, fireEvent, screen } from "@testing-library/react";

describe("Tree test", () => {
  test("测试聚焦事件和失焦事件", () => {
    const props = [
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
    render(<Tree list={props}></Tree>);
  });
});
