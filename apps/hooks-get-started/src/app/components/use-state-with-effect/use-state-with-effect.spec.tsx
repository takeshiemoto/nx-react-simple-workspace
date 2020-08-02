import React from "react";
import { render } from "@testing-library/react";

import UseStateWithEffect from "./use-state-with-effect";

describe(" UseStateWithEffect", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<UseStateWithEffect />);
    expect(baseElement).toBeTruthy();
  });
});
