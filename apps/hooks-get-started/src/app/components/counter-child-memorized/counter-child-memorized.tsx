import React from "react";

import "./counter-child-memorized.scss";

export interface CounterChildMemorizedProps {
  count?: number;
  handleClick?: () => void;
}

export const CounterChildMemorized = React.memo(
  (props: CounterChildMemorizedProps) => {
    console.log("Counter2が更新された場合のみ再レンダリング");
    /** 但し、propに関数を渡した場合は参照が異なる為、memo化されない */
    return (
      <>
        <div>Child {props.count}</div>
      </>
    );
  }
);

export default CounterChildMemorized;
