import "@testing-library/jest-dom";
import React from "react";
import Input from "../index";
import { render, fireEvent, screen } from "@testing-library/react";

describe("Input test", () => {
  test("测试聚焦事件和失焦事件", () => {
    const props = {
      label: "Label",
      placeholder: "Placeholder",
    };
    render(<Input label="Label" placeholder="Placeholder"></Input>);

    expect(screen.getByText(props.label)).toBeInTheDocument();

    const i = screen.getByRole("textbox");
    expect(i).toBeInTheDocument();

    fireEvent.focus(i);
    expect(i.getAttribute("placeholder")).toBe(props.placeholder);

    fireEvent.blur(i);
    expect(i.getAttribute("placeholder")).toBe("");

    fireEvent.focus(i);
    fireEvent.change(i, {
      target: { value: "ai input" },
    });
    expect(i).toHaveValue("ai input");

    fireEvent.blur(i);
    expect(i.getAttribute("placeholder")).toBe("");
    expect(i).toHaveValue("ai input");
  });
});
