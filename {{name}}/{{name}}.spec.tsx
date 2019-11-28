import * as React from "react";

import { mount } from "enzyme";
import { {{name}} } from "../{{name}}";

describe("{{name}}", () => {
  let wrapper;

  const buildWrapper = () => {
    wrapper = mount(<{{name}} />);
  };

  beforeEach(()=>{
    buildWrapper();
  });
});
