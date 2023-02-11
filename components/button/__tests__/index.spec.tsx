import "@testing-library/jest-dom";
import React from "react";
import Button from "../index";
import { render, fireEvent, screen } from "@testing-library/react";

describe("button按钮测试", () => {
  test("测试click", () => {
    const props = {
      label: "Download",
      size: "sm",
      type: "default",
      wave: false,
    };
    render(<Button label="Download" size="sm" type="default" wave></Button>);

    const b = screen.getByText(props.label);

    expect(b).toBeInTheDocument();
    // console.log(b);
  });
});
