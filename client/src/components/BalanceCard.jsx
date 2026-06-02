import React from "react";

const BalanceCard = ({ balance }) => {
  return (
   <div className="card balance-card">
  <h3>Current Balance</h3>
  <h1>₹ {balance}</h1>
</div>
  );
};

export default BalanceCard;