import * as React from "react";

import { mount } from "enzyme";
import { {{name}} } from "../{{name}}";

describe("{{name}}", () => {
  const wrapper;

  beforeEach(()=>{
    const wrapper = mount(
      <{{name}} />
    );
  })

  it("renders correctly", () => {
    
    expect(wrapper).toMatchSnapshot();
  });

  it("", ()=> {

  });
});
