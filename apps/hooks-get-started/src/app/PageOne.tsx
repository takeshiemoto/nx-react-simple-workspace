import React from "react";

import styled from "styled-components";
import CustomUseInput from "./components/custom-use-input/custom-use-input";
import { Counter } from "./components/counter/counter";
import { CounterFunctionProps } from "./components/counter-function-props/counter-function-props";
import { CounterUseCallbackProps } from "./components/counter-use-callback-props/counter-use-callback-props";
import { CounterDouble } from "./components/counter-double/counter-double";
import { CounterUseMemoDouble } from "./components/counter-use-memo-double/counter-use-memo-double";
import { CounterUseRef } from "./components/counter-use-ref/counter-use-ref";
import SearchResults from "./components/search-results/search-results";

/* eslint-disable-next-line */
export interface PageOneProps {}

const StyledPageOne = styled.div`
  color: pink;
`;

export const PageOne = (props: PageOneProps) => {
  return (
    <StyledPageOne>
      <CustomUseInput />
      <Counter />
      <CounterFunctionProps />
      <CounterUseCallbackProps />
      <CounterDouble />
      <CounterUseMemoDouble />
      <CounterUseRef />
      <SearchResults />
    </StyledPageOne>
  );
};

export default PageOne;
