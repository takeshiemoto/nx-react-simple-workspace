import React, { useState } from "react";

import "./counter-double.scss";

export const CounterDouble = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  /**
   * count1が更新されても走る（無駄な再計算）
   */
  const doubleCount = (count: number) => {
    console.log("Run double count");
    return count * 2;
  };
  const count2Double = doubleCount(count2);

  return (
    <>
      <div>{count2Double}</div>
      <button onClick={() => setCount1(count1 + 1)}>Count1 up</button>
      <button onClick={() => setCount2(count2 + 1)}>Count2 up</button>
    </>
  );
};
