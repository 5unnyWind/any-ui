import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Badge from "../index";

describe("Badge test", () => {
  test("测试Badge添加属性", () => {
    const props = {
      children: "10",
      dot: false,
      type: "default",
    };
    const { container } = render(
      <Badge
        dot={props.dot}
        type={props.type as any}
        children={props.children}
      ></Badge>
    );
    expect(container).toBeInTheDocument();
  });

  it("should supoort text", () => {
    const html = render(<Badge>count</Badge>);
    expect(html).toMatchSnapshot();
  });

  it("should render different types", () => {
    const wrapper = render(
      <div>
        <Badge type="success">badge</Badge>
        <Badge type="secondary">badge</Badge>
        <Badge type="warning">badge</Badge>
        <Badge type="error">badge</Badge>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("should hide content when in dot mode", () => {
    const { container, unmount } = render(<Badge dot>test-value</Badge>);
    expect(container.innerHTML).not.toContain("test-value");
    expect(unmount).not.toThrow();
  });
});
