import React, { useCallback, useRef } from "react";

import "./counter-use-ref.scss";

export const CounterUseRef = () => {
  /**
   * countが更新されてもコンポーネントは再描画されない
   * 更新されてもコンポーネントを再描画したくない内部の変数はuseRefを使う？
   */
  const count = useRef(0);
  const addCount = useCallback(() => {
    count.current += 1;
  }, []);

  const showLog = useCallback(() => {
    console.log(count.current);
  }, []);
  return (
    <>
      <button onClick={addCount}>Increment</button>
      <button onClick={showLog}>ShowLog</button>
    </>
  );
};
