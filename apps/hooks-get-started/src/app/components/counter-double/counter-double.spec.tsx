import React from "react";
import { render } from "@testing-library/react";

import CounterDouble from "./counter-double";

describe(" CounterDouble", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<CounterDouble />);
    expect(baseElement).toBeTruthy();
  });
});
