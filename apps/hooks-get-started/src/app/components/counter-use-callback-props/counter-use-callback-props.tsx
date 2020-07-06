import React, { useCallback, useState } from "react";

import "./counter-use-callback-props.scss";
import CounterChildMemorized from "../counter-child-memorized/counter-child-memorized";

export const CounterUseCallbackProps = () => {
  const [count, setCount] = useState(0);

  /**
   * useCallbackで関数をメモ化
   * 前回のhandleCallbackと等価になる為
   * React.memo化された子コンポーネントは再レンダリングされない
   */
  const handleClick = useCallback(() => {
    console.log("Handle useCallback Click");
  }, []);
  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <CounterChildMemorized handleClick={handleClick} />
    </>
  );
};
