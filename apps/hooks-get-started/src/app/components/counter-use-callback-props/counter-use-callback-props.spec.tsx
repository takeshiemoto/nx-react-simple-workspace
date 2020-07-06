import React from "react";
import { render } from "@testing-library/react";

import CounterUseCallbackProps from "./counter-use-callback-props";

describe(" CounterUseCallbackProps", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<CounterUseCallbackProps />);
    expect(baseElement).toBeTruthy();
  });
});
