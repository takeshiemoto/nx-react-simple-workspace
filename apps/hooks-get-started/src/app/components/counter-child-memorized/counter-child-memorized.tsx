import React from "react";

import "./counter-child-memorized.scss";

export interface CounterChildMemorizedProps {
  count: number;
}

export const CounterChildMemorized = React.memo(
  (props: CounterChildMemorizedProps) => {
    console.log("CounterChildMemorized update");
    /** 但し、propに関数を渡した場合は参照が異なる為、memo化されない */
    return (
      <>
        <div>Child {props.count}</div>
      </>
    );
  }
);

export default CounterChildMemorized;
