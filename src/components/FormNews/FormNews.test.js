import React from "react";
import { shallow } from "enzyme";
import FormNews from "./FormNews";

describe("FormNews", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FormNews />);
    expect(wrapper).toMatchSnapshot();
  });
});
