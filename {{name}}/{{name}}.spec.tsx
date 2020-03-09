import { mount } from "enzyme";
import React from "react";

import { baseTests } from "@testing/baseTests";

import { {{name}} } from "../{{name}}";

describe("{{name}}", () => {
  let wrapper;

  const buildWrapper = () => {
    wrapper = mount(<{{name}} />);
  };

  beforeEach(()=>{
    buildWrapper();
  });

  baseTests(() => wrapper);
});
