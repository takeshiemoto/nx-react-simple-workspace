import React from "react";

import "./postal-code.scss";

export interface PostalCodeProps {
  value: string;
}

export const PostalCode = (props: PostalCodeProps) => {
  return (
    <>
      <span>郵便番号</span>
      <strong>{props.value}</strong>
    </>
  );
};

export default PostalCode;
