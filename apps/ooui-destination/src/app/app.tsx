import React from "react";

import "./app.scss";
import Destination from "./Components/DomainObjects/destination/destination";

export const App = () => {
  return (
    <Destination
      name={"大阪市"}
      postalCode={"536-0008"}
      address={"城東区関目"}
    />
  );
};

export default App;
