import React from "react";

import "./destination.scss";
import Name from "../../DomainElements/name/name";
import PostalCode from "../../DomainElements/postal-code/postal-code";
import Address from "../../DomainElements/address/address";

export interface DestinationProps {
  name: string;
  postalCode: string;
  address: string;
}

export const Destination = (props: DestinationProps) => {
  return (
    <>
      <Name value={props.name} />
      <PostalCode value={props.postalCode} />
      <Address value={props.address} />
    </>
  );
};

export default Destination;
