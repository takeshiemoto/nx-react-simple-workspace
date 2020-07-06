import React from "react";

import "./counter-child.scss";

export interface CounterChildProps {
  count: number;
}

export const CounterChild = (props: CounterChildProps) => {
  console.log("CounterChild update");
  return (
    <>
      <div>Child {props.count}</div>
    </>
  );
};

export default CounterChild;
