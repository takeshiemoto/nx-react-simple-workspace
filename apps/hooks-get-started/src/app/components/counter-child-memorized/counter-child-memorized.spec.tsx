import React from "react";
import { render } from "@testing-library/react";

import CounterChildMemorized from "./counter-child-memorized";

describe(" CounterChildMemorized", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<CounterChildMemorized />);
    expect(baseElement).toBeTruthy();
  });
});
