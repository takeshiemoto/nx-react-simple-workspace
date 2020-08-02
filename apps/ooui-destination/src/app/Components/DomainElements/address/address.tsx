import React from "react";

import "./address.scss";

export interface AddressProps {
  value: string;
}

export const Address = (props: AddressProps) => {
  return (
    <>
      <span>住所</span>
      <strong>{props.value}</strong>
    </>
  );
};

export default Address;
