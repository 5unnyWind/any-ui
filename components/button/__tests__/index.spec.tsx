import "@testing-library/jest-dom";
import React from "react";
import Button from "../index";
import { render, screen } from "@testing-library/react";

describe("Button test", () => {
  test("测试按钮添加属性", () => {
    const props = {
      label: "Download",
      size: "sm",
      type: "default",
      wave: false,
    };
    render(<Button label="Download" size="sm" type="default" wave></Button>);

    const b = screen.getByText(props.label);

    expect(b).toBeInTheDocument();
    expect(b).toHaveTextContent(props.label);
    expect(b).toHaveClass(`ai-btn-${props.type} ai-btn-${props.size}`);
  });
});
