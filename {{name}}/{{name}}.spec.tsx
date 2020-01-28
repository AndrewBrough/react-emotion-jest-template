import * as React from "react";

import { mount } from "enzyme";

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
