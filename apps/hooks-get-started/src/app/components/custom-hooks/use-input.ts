import React, { useState } from "react";

export const useInput = (defaultValue: string) => {
  const [value, setValue] = useState(defaultValue);
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }
  return { value, onChange };
};
