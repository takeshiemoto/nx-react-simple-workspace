import React from "react";
import { render } from "@testing-library/react";

import CustomUseInput from "./custom-use-input";

describe(" CustomUseInput", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<CustomUseInput />);
    expect(baseElement).toBeTruthy();
  });
});
