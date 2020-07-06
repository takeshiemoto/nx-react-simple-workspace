import React from "react";
import { render } from "@testing-library/react";

import CounterUseMemoDouble from "./counter-use-memo-double";

describe(" CounterUseMemoDouble", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<CounterUseMemoDouble />);
    expect(baseElement).toBeTruthy();
  });
});
