import React from "react";
import CreditCard from "./CreditCard";

function App(props) {
  const bankName = "Big Bank, Inc.";

  const cardNum = {
    p1: 1234,
    p2: 5645,
    p3: 8765,
    p4: 4321,
  };
  return (
    <div className="App">
      <CreditCard bank={bankName} />
    </div>
  );
}

export default App;
