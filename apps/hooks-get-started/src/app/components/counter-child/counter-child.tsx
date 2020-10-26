import React from "react";

import "./counter-child.scss";

export interface CounterChildProps {
  count: number;
}

export const CounterChild = (props: CounterChildProps) => {
  console.log("Counter1でも2でも再レンダリングされる");
  return (
    <>
      <div>Child {props.count}</div>
    </>
  );
};

export default CounterChild;
