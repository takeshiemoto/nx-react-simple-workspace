import React from "react";
import { render } from "@testing-library/react";

import SearchResultsLazy from "./search-results-lazy";

describe(" SearchResultsLazy", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SearchResultsLazy />);
    expect(baseElement).toBeTruthy();
  });
});
