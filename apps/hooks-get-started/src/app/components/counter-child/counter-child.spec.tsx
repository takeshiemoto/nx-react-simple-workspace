import React from "react";
import { render } from "@testing-library/react";

import CounterChild from "./counter-child";

describe(" CounterChild", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<CounterChild />);
    expect(baseElement).toBeTruthy();
  });
});
