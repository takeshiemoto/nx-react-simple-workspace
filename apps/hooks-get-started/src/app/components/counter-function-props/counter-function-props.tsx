import React, { useState } from "react";

import "./counter-function-props.scss";
import CounterChildMemorized from "../counter-child-memorized/counter-child-memorized";

export const CounterFunctionProps = () => {
  const [count, setCount] = useState(0);
  /**
   * React.memoに関数を渡した場合は
   * 毎回参照が異なるため、再レンダリングされる
   */
  const handleClick = () => {
    console.log("HandleClick!!");
  };
  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <CounterChildMemorized handleClick={handleClick} />
    </>
  );
};
