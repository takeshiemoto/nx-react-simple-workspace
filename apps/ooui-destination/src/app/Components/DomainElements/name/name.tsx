import React from "react";

import "./name.scss";

export interface NameProps {
  value: string;
}

export const Name = (props: NameProps) => {
  return (
    <>
      <span>名前</span>
      <strong>{props.value}</strong>
    </>
  );
};

export default Name;
