import React, { useMemo, useState } from "react";

import "./counter-use-memo-double.scss";

/* eslint-disable-next-line */
export interface CounterUseMemoDoubleProps {}

export const CounterUseMemoDouble = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const doubleCount = (count: number) => {
    console.log("Run double count");
    return count * 2;
  };

  /**
   * Count2を2倍にした値をメモ化
   * 第2引数の[count2]が更新された場合のみ実行される
   * count1が更新された際は実行されない
   */
  const count2Double = useMemo(() => doubleCount(count2), [count2]);

  /**
   * コンポーネントの再レンダリングをスキップすることもできる
   * count2が更新された場合のみ更新される
   * ただし、関数コンポーネント内ではReact.memoが使えないので注意！！
   */
  const CountView = useMemo(() => {
    console.log("Counter view");
    const double = doubleCount(count2);
    return (
      <div>
        Counter: {count2} {double}
      </div>
    );
  }, [count2]);

  return (
    <>
      {CountView}
      <button onClick={() => setCount1(count1 + 1)}>Count1 up</button>
      <button onClick={() => setCount2(count2 + 1)}>Count2 up</button>
    </>
  );
};
