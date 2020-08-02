import React, { useEffect, useState } from "react";

import "./use-state-with-effect.scss";

export const UseStateWithEffect: React.FC = () => {
  const [counter, setCounter] = useState(9);
  useEffect(() => {
    const id = setInterval(() => {
      /**
       * setCounter(counter + 1)と書くとバグる
       * 実行条件が[]の場合、counterはinitialStateで固定される！
       * よってprev => prev + 1のように更新関数を使ったほうが良い。
       */
      setCounter((prev) => prev + 1);
    }, 500);
    return () => clearInterval(id);
  }, []);
  return <div>{counter}</div>;
};

export default UseStateWithEffect;
