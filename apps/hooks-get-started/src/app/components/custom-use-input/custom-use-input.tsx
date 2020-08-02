import React, { useEffect } from "react";
import { useInput } from "../custom-hooks";

import "./custom-use-input.scss";

export const CustomUseInput = () => {
  const name = useInput("Hello");
  const type = useInput("friend");

  useEffect(() => {
    document.title = `${name.value} is ${type.value}`;
  }, [name, type]);
  return (
    <div>
      <input {...name} />
      <input {...type} />
    </div>
  );
};

export default CustomUseInput;
