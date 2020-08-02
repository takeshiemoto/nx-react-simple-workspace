import React from "react";
import { render } from "@testing-library/react";

import UseContextExample from "./use-context-example";

describe(" UseContextExample", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<UseContextExample />);
    expect(baseElement).toBeTruthy();
  });
});
