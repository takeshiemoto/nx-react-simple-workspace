import React, { useState } from "react";

import "./counter.scss";
import CounterChild from "../counter-child/counter-child";
import CounterChildMemorized from "../counter-child-memorized/counter-child-memorized";

export const Counter = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <button onClick={() => setCount1(count1 + 1)}>Count1 up</button>
      <button onClick={() => setCount2(count2 + 1)}>Count2 up</button>
      <div>{count1}</div>
      <CounterChild count={count2} />
      <CounterChildMemorized count={count2} />
    </>
  );
};
