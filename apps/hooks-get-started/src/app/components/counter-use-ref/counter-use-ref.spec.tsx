import React from "react";
import { render } from "@testing-library/react";

import CounterUseRef from "./counter-use-ref";

describe(" CounterUseRef", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<CounterUseRef />);
    expect(baseElement).toBeTruthy();
  });
});
