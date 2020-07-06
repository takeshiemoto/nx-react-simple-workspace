import React from "react";
import { render } from "@testing-library/react";

import CounterFunctionProps from "./counter-function-props";

describe(" CounterFunctionProps", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<CounterFunctionProps />);
    expect(baseElement).toBeTruthy();
  });
});
