import React from "react";
import { mount } from "enzyme";
import Button from "../index";

describe("button按钮测试", () => {
  test("测试click", () => {
    const toggle = jest.fn();
    const wrapper = mount(
      <Button label="Download" size="sm" type="default" wave></Button>
    );
    const b = wrapper.find("button");
    b.simulate("click");
    expect(toggle).toBeCalledWith(2);
  });
});
